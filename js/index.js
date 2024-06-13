
document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault();

	// Retrieve form values
	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const message = document.getElementById("message").value;
	const policyAccepted = document.getElementById("policy").checked;

	// Simple validation
	if (firstName && lastName && email && message && policyAccepted) {
		alert("Uw bericht is verzonden!");
		// Here you can add code to actually send the form data to a server
		document.getElementById("contactForm").reset();
	} else {
		alert("Vul alstublieft alle verplichte velden in en accepteer de privacy policy.");
	}
});

console.log("hello world");
document.addEventListener("DOMContentLoaded", function () {
	const calendarBody = document.getElementById("calendar-body");
	const monthAndYear = document.getElementById("monthAndYear");
	const prevMonth = document.getElementById("prevMonth");
	const nextMonth = document.getElementById("nextMonth");
	const eventDetails = document.getElementById("eventDetails");

	const events = {
		"2024-06-15": "Vergadering met team",
		"2024-06-20": "Presentatie project",
		"2024-06-25": "Teamuitje",
	};

	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	prevMonth.addEventListener("click", () => {
		currentMonth--;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear--;
		}
		renderCalendar(currentMonth, currentYear);
	});

	nextMonth.addEventListener("click", () => {
		currentMonth++;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear++;
		}
		renderCalendar(currentMonth, currentYear);
	});

	function renderCalendar(month, year) {
		calendarBody.innerHTML = "";
		monthAndYear.textContent = `${getMonthName(month)} ${year}`;

		const firstDay = new Date(year, month).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		let date = 1;
		for (let i = 0; i < 6; i++) {
			const row = document.createElement("tr");

			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					const cell = document.createElement("td");
					cell.textContent = "";
					row.appendChild(cell);
				} else if (date > daysInMonth) {
					break;
				} else {
					const cell = document.createElement("td");
					cell.textContent = date;
					cell.addEventListener("click", () => showEvent(year, month + 1, date));
					row.appendChild(cell);
					date++;
				}
			}
			calendarBody.appendChild(row);
		}
	}

	function getMonthName(month) {
		const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
		return monthNames[month];
	}

	function showEvent(year, month, day) {
		const eventKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		const event = events[eventKey];
		eventDetails.textContent = event ? event : "Geen evenement";
		eventDetails.classList.add("active");
	}

	renderCalendar(currentMonth, currentYear);
});
=======
console.log("hello world");

document.addEventListener("DOMContentLoaded", function () {
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

