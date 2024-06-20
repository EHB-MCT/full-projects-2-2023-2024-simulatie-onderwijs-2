document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault();

	const formData = {
		firstName: document.getElementById("firstName").value,
		lastName: document.getElementById("lastName").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value,
		message: document.getElementById("message").value,
	};

	console.log("Form data:", formData);

	fetch("https://simulatie2.pockethost.io/api/collections/contact_us/records", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Response from server:", data);
			alert("Message sent successfully!");
		})
		.catch((error) => {
			console.error("Error:", error);
			alert("Error sending message!");
		});
});
