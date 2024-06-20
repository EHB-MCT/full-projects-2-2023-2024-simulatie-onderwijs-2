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
					postData.datum,
					postData.titel,
					postData.img,
					postData.comments,
					postData.username,
					postData.created
				);
				list.push(post);
			});

			displayPosts(list);
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

function displayPosts(posts) {
	const container = document.getElementById("posts");
	container.innerHTML = "";
	posts.forEach((post) => {
		container.innerHTML += post.htmlString;
	});
}

function filterPosts(query) {
	const filteredPosts = list.filter((post) =>
		post.titel.toLowerCase().includes(query.toLowerCase())
	);
	displayPosts(filteredPosts);
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
		};
		postData(data);
	});

	const searchBar = document.querySelector(".search-bar");
	searchBar.addEventListener("input", (event) => {
		const query = event.target.value;
		filterPosts(query);
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
