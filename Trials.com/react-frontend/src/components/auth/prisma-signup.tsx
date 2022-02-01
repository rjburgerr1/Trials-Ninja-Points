import axios from "axios";

export const signupPrisma = async (
    email: string,
    username: string,
    userid: string
) => {
    try {
        return await axios.post("/sign-up-complete", {
            email,
            username, // + any other parameters you want to send in the POST request
            userid,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const checkIfUserExists = async (username: string) => {
    try {
        await axios.get("/does-username-exist", {
            params: {
                username: username,
            },
        });
    } catch (error) {
        console.log(error);
        throw "Username already exists";
    }
};

export default signupPrisma;
