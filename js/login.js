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

function login() {
	// Implement the login functionality here
}

window.showRegistration = showRegistration;
window.register = register;
window.login = login;
