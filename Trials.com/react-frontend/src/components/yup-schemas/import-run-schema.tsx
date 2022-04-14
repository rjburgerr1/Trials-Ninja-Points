import Yup from "../helpers/yup-extended"; // I think `import * as yup from "yup"` also works
export const ImportRunSchema = Yup.object({
    discordUser: Yup.string().max(30, "Name is too long").required("Required"),
});
