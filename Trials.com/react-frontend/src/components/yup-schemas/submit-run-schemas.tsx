import moment from "moment";
import Yup from "../helpers/yup-extended"; // I think `import * as yup from "yup"` also works
export const SubmitRunSchema = Yup.object({
    trackName: Yup.string().max(45, "Name is too long").required("Required"),
    creator: Yup.string().max(45, "Name is too long").required("Required"),
    faults: Yup.number()
        .min(0, "Minimum number of faults is 0!")
        .max(499, "Maximum number of faults is 499!")
        .integer("Faults are required, and must be integers")
        .required("Required"),

    time: Yup.string()
        .required("Time cannot be empty")
        .test(
            "is-greater",
            "Time must be mm:ss.SSS format <30:00.000",
            function (value) {
                return moment(value, "mm:ss.SSS", true).isValid(); // Make sure time is fully filled out in the
            }
        ),
    length: Yup.string().required("Required"),
    consistency: Yup.string().required("Required"),
    ninjaLevel: Yup.number().required("Required"),
    rating: Yup.string().required("Required"),
    rank: Yup.number().min(1, "Minimum rank is 1!"),
    video: Yup.string().isValidYoutubeURL().nullable(),
});
