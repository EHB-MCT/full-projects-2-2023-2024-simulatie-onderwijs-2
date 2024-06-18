// pocketbase.js
import PocketBase from "pocketbase";

const pb = new PocketBase(
	"https://simulatie2.pockethost.io/api/collections/users/records"
);

async function createUser(data) {
	try {
		const response = await pb.collection("users").create(data);
		console.log("User created successfully:", response);
		return response;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export { createUser };
