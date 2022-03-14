import * as Yup from "yup";
export const UpdateProfileSchema = Yup.object({
    email: Yup.string().max(320, "Email is too long"),
    password: Yup.string().min(6).max(60),
    bio: Yup.string().max(300, "Bio is too long").nullable(),
    region: Yup.string().max(100).nullable(),
    country: Yup.string().max(3).nullable(),
    aliases: Yup.string().max(150).nullable(),
    username: Yup.string().max(25),
});
