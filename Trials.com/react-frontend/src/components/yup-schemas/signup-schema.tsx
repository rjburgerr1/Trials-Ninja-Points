import Yup from "../helpers/yup-extended"; // I think `import * as yup from "yup"` also works
export const SignupSchema = Yup.object({
    username: Yup.string()
        .max(25, "Username is too long")
        .required("Username is Required"),
    email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),

    password: Yup.string().min(6, "Password is too short").required("Required"),
});
