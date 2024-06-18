import Forum from "./Forum.js";

const list = [];

function fetchData() {
	console.log("Fetching data...");

	// Clear existing posts
	document.getElementById("posts").innerHTML = "";

	const apiUrl = "https://simulatie2.pockethost.io/api/collections/forum2/records";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			data.items.forEach((postData) => {
				const post = new Forum(postData.context, postData.datum, postData.titel, postData.img, postData.comments);
				list.push(post);
			});

			displayPosts();
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

function displayPosts() {
	const container = document.getElementById("posts");
	list.forEach((post) => {
		container.innerHTML += post.htmlString;
	});
}

fetchData();
