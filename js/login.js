async function login() {
	const email = document.getElementById("login-email").value;
	const password = document.getElementById("login-password").value;

	const data = {
		identity: email,
		password,
	};

	try {
		const response = await fetch(
			"https://simulatie2.pockethost.io/api/collections/users/auth-with-password",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.log("Error response data:", errorData);
			throw new Error(`Error: ${errorData.message || response.statusText}`);
		}

		const result = await response.json();
		console.log("Login response data:", result);
		alert("Login successful!");

		// Store the authentication token
		localStorage.setItem("authToken", result.token);

		// Decode the token to get user details
		const decodedToken = jwt_decode(result.token);
		const userId = decodedToken.id; // Assuming the user ID is stored in the token
		const username = await fetchUsername(userId);

		localStorage.setItem("username", username);

		// Redirect to forum page or reload the current page
		window.location.href = "forum.html";
	} catch (error) {
		console.error("Error details:", error);
		alert("Error logging in: " + error.message);
	}
}

async function fetchUsername(userId) {
	const response = await fetch(
		`https://simulatie2.pockethost.io/api/collections/users/records/${userId}`
	);
	if (!response.ok) {
		throw new Error("Failed to fetch user details");
	}
	const userData = await response.json();
	return userData.username; // Adjust this based on the actual field in your API response
}

function showRegistration() {
	document.querySelector(".login-welcome").style.display = "none";
	document.getElementById("registration").style.display = "block";
}

async function register() {
	const username = document.getElementById("register-username").value;
	const email = document.getElementById("register-email").value;
	const password = document.getElementById("register-password").value;
	const passwordConfirm = document.getElementById(
		"register-password-confirm"
	).value;

	if (password !== passwordConfirm) {
		alert("Passwords do not match!");
		return;
	}

	const data = {
		username,
		email,
		emailVisibility: true,
		password,
		passwordConfirm,
		name: username,
	};

	try {
		const response = await fetch(
			"https://simulatie2.pockethost.io/api/collections/users/records",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`Error: ${errorData.message}`);
		}

		const result = await response.json();
		alert("Account created successfully!");
		// Optionally redirect to login page or perform other actions
	} catch (error) {
		console.error("Error details:", error);
		alert("Error creating account: " + error.message);
	}
}

window.showRegistration = showRegistration;
window.register = register;
window.login = login;
