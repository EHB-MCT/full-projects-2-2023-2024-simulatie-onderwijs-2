import Forum from "./Forum.js";

const list = [];

function fetchData() {
	console.log("Fetching data...");

	document.getElementById("posts").innerHTML = "";

	list.length = 0;

	const apiUrl =
		"https://simulatie2.pockethost.io/api/collections/forum2/records";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			data.items.forEach((postData) => {
				const post = new Forum(
					postData.context,
					postData.created,
					postData.titel,
					postData.img,
					postData.comments,
					postData.userData
				);
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

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("postForm");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const token = localStorage.getItem("token");
		const decodedToken = jwt_decode(token);
		const username = decodedToken.userData;

		const data = {
			titel: formData.get("titel"),
			context: formData.get("context"),
			img: formData.get("img"),
			username: username.get("username"),
			created: created.get("created"),
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

				fetchData();
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
});
