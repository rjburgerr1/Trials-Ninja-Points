
import axios from "axios";

const signupPrisma = (email: string, username: string, userid: string) => {
	axios
		.post("/sign-up-complete", {
			email,
			username, // + any other parameters you want to send in the POST request
			userid,
		})
		.then((response) => {
			console.log(response);
			// do something with response, and on response
		})
		.catch((error) => {
			console.log(error);
			// do something when request was unsuccessful
		});
}

export default signupPrisma;