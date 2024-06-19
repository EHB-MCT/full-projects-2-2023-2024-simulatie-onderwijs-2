import Event from "./Event.js";

const list = [];

function fetchData() {
	console.log("test");
	document.getElementById("event-1").innerHTML = ""; // Dit zorgt ervoor dat de inhoud wordt leeggemaakt

	const apiUrl = "https://simulatie2.pockethost.io/api/collections/events2/records";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			data.items.forEach((eventData) => {
				const eventInstance = new Event(eventData.context, eventData.datum, eventData.titel, eventData.img, eventData.uur, eventData.plaats);
				list.push(eventInstance);
			});

			displayEvents();
		});
}

function displayEvents() {
	const container = document.getElementById("event-1");
	list.forEach((eventInstance) => {
		container.innerHTML += eventInstance.htmlString;
	});
}

fetchData();
