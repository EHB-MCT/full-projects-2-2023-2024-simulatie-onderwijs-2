import Forum from "./Forum.js";

const list = [];

function fetchData() {
	console.log("Fetching data...");

	// Clear existing posts
	document.getElementById("posts").innerHTML = "";

	// Clear the list to avoid duplicates
	list.length = 0;

	const apiUrl =
		"https://simulatie2.pockethost.io/api/collections/forum2/records";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			data.items.forEach((postData) => {
				const username = decodeToken(postData.userData); // Decode the token to get the username
				const post = new Forum(
					postData.context,
					postData.datum,
					postData.titel,
					postData.img,
					postData.comments,
					username // Pass the username to the Forum class
				);
				list.push(post);
			});

			displayPosts();
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

function decodeToken(token) {
	// Assuming the token is a JWT, use jwt-decode to extract the username
	const decoded = jwt_decode(token);
	return decoded.username; // Adjust based on how the username is stored in the token
}

function displayPosts() {
	const container = document.getElementById("posts");
	list.forEach((post) => {
		container.innerHTML += post.htmlString;
	});
}

fetchData();

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("postForm");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const data = {
			titel: formData.get("titel"),
			context: formData.get("context"),
			img: formData.get("img"),
			userData: localStorage.getItem("authToken"), // Add the user token from localStorage
		};
		postData(data);
	});

	function postData(data) {
		const apiUrl =
			"https://simulatie2.pockethost.io/api/collections/forum2/records";
		fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((responseData) => {
				console.log("Success:", responseData);
				// Fetch the data again to update the list of posts
				fetchData();
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
});
