import { useState } from "react";
import { CustomSelect } from "./data-entry/text-inputs";
import { InfoTip } from "./help-info/info-tips";
import { Field, Form, Formik } from "formik";
import { FieldError } from "./helpers/field-error";
import { Link, useNavigate } from "react-router-dom";
import { List } from "./helpers/lists";
import { SubmitRunSchema } from "./yup-schemas/submit-run-schemas";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";
import InputMask from "react-input-mask";
import Loading from "../components/helpers/loading";
import Ratings from "react-ratings-declarative";
import Slider from "@material-ui/core/Slider";
import { fileUpload } from "./helpers/file-upload";

// Shape of form values
interface FormValues {
    trackName: string;
    creator: string;
    faults: string;
    time: string;
    length: string;
    consistency: string;
    ninjaLevel: string;
    rating: string;
    rank: string;
    rider: string;
    video: string;
    ninjaPoints: number;
}

const SubmitRun = (props: any) => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_AXIOS_FLASK_URL,
    });
    const help = props.help;
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [rating, setRating] = useState();
    const [runs, setRuns] = useState([]);
    const [trackName, setTrackName] = useState();
    const [creator, setCreator] = useState();
    const [time, setTime] = useState();
    const [faults, setFaults] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // According to formik documentation, use formik values in place of props to prevent bugs with formik and also prevent having two versions of the same prop
    // needing to be maintained inside props and formik values
    const initialValues: FormValues = {
        trackName: "",
        creator: "",
        faults: "",
        time: "",
        length: "",
        consistency: "",
        ninjaLevel: "",
        rating: "",
        rank: "",
        video: "",
        rider: currentUser,
        ninjaPoints: 0, // NinjaPoints are not inside the form but these initial values act as props for this component so storing ninjapoints here feels right
    };

    const restrictFaults = (props: any, value: any) => {
        if (
            value.length <= 3 &&
            ((value < 500 && value >= 0) || value === "")
        ) {
            props.setFieldValue("faults", value);
        }
    };

    const scanLB = async (file: File, filename: string, props: any) => {
        setIsLoading(true);

        // Upload leaderboard/select track screen to
        const s3File = await fileUpload(file, currentUser, "leaderboards");

        const response = await instance.get("/flask/read-lb", {
            params: { fileURL: s3File.data.banner_url },
        });

        let runsStr = response.data[0].match(/(?<="data":)(.*)(?=})/g);
        let runsArr = JSON.parse(runsStr);

        setTrackName(response.data[1]);
        setCreator(response.data[2]);
        await props.setFieldValue("trackName", response.data[1]);
        await props.setFieldValue("creator", response.data[2]);

        setRuns(runsArr);

        setIsLoading(false);
    };

    const restrictTime = (props: any, value: any) => {
        // Max time as an int is 2959999
        // RegEx to match only numbers from the time mask input element

        if (value.match(/\d/g)) {
            // Join numbers into one int value
            var time = value.match(/\d/g).join("");
            if (
                (time.length === 1 && time <= 2) ||
                (time.length === 2 && time <= 29) ||
                (time.length === 3 && time <= 295) ||
                (time.length === 4 && time <= 2959) ||
                (time.length === 5 && time <= 29599) ||
                (time.length === 6 && time <= 295999) ||
                (time.length === 7 && time <= 2959999)
            ) {
                props.setFieldValue("time", value);
            }
        } else {
            props.setFieldValue("time", value);
        }
    };

    // Submit handler for submit-run form. Handles POST request and calculating NP for each run
    const handleOnSubmit = async (values: FormValues, actions: any) => {
        try {
            // Upload run (necessary to include it in np calculation for truest/ideal np value)
            // I suppose this could be reduced by removing a few prisma
            // invocations if we just send the run data to the
            // calculate-ninja-points route and then merge it with Javascript
            await axios.post("/submit-run", {
                ...values,
            });

            // Calculate Ninja Points for run (+update run/tracks row with np value)
            const response = await axios.post("/calculate-ninja-points", {
                ...values,
            });

            // Show page with end result
            navigate("/submitted-run", {
                state: { ninjaPoints: response.data.ninjaPoints },
            });
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SubmitRunSchema}
            onSubmit={handleOnSubmit}
        >
            {(props: any) => (
                <Form>
                    <div className="submit-run-form-container">
                        <div className="submit-run-autofill-element">
                            <List
                                items={runs}
                                title={trackName}
                                creator={creator}
                                setTime={setTime}
                                setFaults={setFaults}
                                setFieldValue={props.setFieldValue}
                            />
                        </div>
                        <div className="submit-run-form" id="submit-run-form">
                            <label className="form-label">
                                <Link
                                    className="form-link"
                                    to={"/submit-run/scan-lb-help"}
                                    replace={false}
                                    tabIndex={-1}
                                >
                                    Scan Leaderboard?
                                </Link>
                                {InfoTip(
                                    "scan-leaderboard",
                                    "This will take an image of an in-game leaderboard to scan. It will then autofill parts of this submission form with your run info."
                                )}
                            </label>

                            <div id="image-upload-input">
                                <input
                                    id="scan-lb-input"
                                    type="file"
                                    name="banner"
                                    onChange={(e) => {
                                        try {
                                            if (e.target.files) {
                                                scanLB(
                                                    e.target.files[0],
                                                    e.target.files[0].name,
                                                    props
                                                );
                                            }
                                        } catch (error: any) {}
                                    }}
                                    accept="image/*"
                                />
                                <Loading
                                    className="loading"
                                    type="spokes"
                                    color="green"
                                    height={20}
                                    width={20}
                                    isLoading={isLoading}
                                />
                            </div>
                            <div className="form-inline-group">
                                <Field id="rider" name="rider" type="hidden" />

                                <label className="form-label">
                                    Track Name
                                    {InfoTip(
                                        "track-name",
                                        "The name of a track you want to submit a run for"
                                    )}
                                    <FieldError
                                        error={props.errors.trackName}
                                        touched={props.touched.trackName}
                                    />
                                </label>
                                <Field
                                    id="trackName"
                                    name="trackName"
                                    onChange={props.handleChange}
                                    placeholder="Turbine Terror"
                                    type="text"
                                    value={props.values.trackName || trackName}
                                />

                                <label className="form-label">
                                    Creator
                                    {InfoTip(
                                        "creator",
                                        "The name of the creator of the track"
                                    )}
                                    <FieldError
                                        error={props.errors.creator}
                                        touched={props.touched.creator}
                                    />
                                </label>
                                <Field
                                    id="creator"
                                    name="creator"
                                    onChange={props.handleChange}
                                    placeholder="Slikscythez"
                                    type="text"
                                    value={props.values.creator}
                                />

                                <label className="form-label">
                                    Faults
                                    {InfoTip(
                                        "faults",
                                        "The amount of faults for your run on the track"
                                    )}
                                    <FieldError
                                        error={props.errors.faults}
                                        touched={props.touched.faults}
                                    />
                                </label>
                                <Field
                                    placeholder="241"
                                    id="faults"
                                    name="faults"
                                    type="number"
                                    onKeyDown={(event: any) =>
                                        (event.key === "e" ||
                                            event.key === "E" ||
                                            event.key === "-" ||
                                            event.key === "+" ||
                                            event.key === ".") &&
                                        event.preventDefault()
                                    }
                                    onChange={(event: any) => {
                                        event.preventDefault();
                                        const { value } = event.target;
                                        restrictFaults(props, value);
                                    }}
                                    value={props.values.faults || faults}
                                />
                                <label className="form-label">
                                    Time
                                    {InfoTip(
                                        "time",
                                        "The time for your run on the track"
                                    )}
                                    <FieldError
                                        error={props.errors.time}
                                        touched={props.touched.time}
                                    />
                                </label>
                                <InputMask
                                    id="time-mask-field"
                                    placeholder="12:33.677"
                                    mask="99:99.999"
                                    name="time"
                                    type="text"
                                    onChange={(event: any) => {
                                        event.preventDefault();
                                        const { value } = event.target;
                                        restrictTime(props, value);
                                    }}
                                    value={props.values.time || time}
                                ></InputMask>
                                <label className="form-label">
                                    <Link
                                        className="form-link"
                                        to={"/submit-run/ninja-level-help"}
                                        replace={false}
                                        tabIndex={-1}
                                    >
                                        Ninja Level?
                                    </Link>
                                    {InfoTip(
                                        "ninja-level",
                                        "Your opinion of the ninja level for the track you passed"
                                    )}
                                    <FieldError
                                        error={props.errors.ninjaLevel}
                                        touched={props.touched.ninjaLevel}
                                    />
                                </label>
                                <Slider
                                    id="slider"
                                    defaultValue={0.5}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-custom"
                                    step={0.1}
                                    min={0.5}
                                    max={9.5}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    name="ninjaLevel"
                                    onChange={(event, value) =>
                                        props.setFieldValue("ninjaLevel", value)
                                    }
                                />
                                <label className="form-label">
                                    <Link
                                        className="form-link"
                                        to={"/submit-run/length-help"}
                                        replace={false}
                                        tabIndex={-1}
                                    >
                                        Length?
                                    </Link>
                                    {InfoTip(
                                        "length",
                                        "Your opinion of the length of the track you passed"
                                    )}
                                    <FieldError
                                        error={props.errors.length}
                                        touched={props.touched.length}
                                    />
                                </label>
                                <CustomSelect
                                    id="length-field"
                                    className="formik-field"
                                    name="length"
                                    autoComplete="off"
                                    value={props.values.length}
                                >
                                    <option
                                        value=""
                                        label="Select Length of track"
                                    />
                                    <option value="Short" label="Short" />
                                    <option value="Medium" label="Medium" />
                                    <option value="Long" label="Long" />
                                </CustomSelect>

                                <label className="form-label">
                                    <Link
                                        className="form-link"
                                        to={"/submit-run/consistency-help"}
                                        replace={false}
                                        tabIndex={-1}
                                    >
                                        Consistency?
                                    </Link>
                                    {InfoTip(
                                        "consistency",
                                        "Your opinion of the consistency of the track you passed"
                                    )}
                                    <FieldError
                                        error={props.errors.consistency}
                                        touched={props.touched.consistency}
                                    />
                                </label>
                                <CustomSelect
                                    id="consistency-field"
                                    className="formik-field"
                                    name="consistency"
                                    autoComplete="off"
                                    onChange={props.handleChange}
                                    value={props.values.consistency}
                                >
                                    <option
                                        value=""
                                        label="Select Consistency of track"
                                    />
                                    <option
                                        value="Not_At_All"
                                        label="Not At All"
                                    />
                                    <option value="Not_Very" label="Not Very" />
                                    <option
                                        value="Moderately"
                                        label="Moderately"
                                    />
                                    <option value="Very" label="Very" />
                                    <option
                                        value="Extremely"
                                        label="Extremely"
                                    />
                                </CustomSelect>
                                <label className="form-label">
                                    Video
                                    {InfoTip(
                                        "video",
                                        "The link to a youtube video of your run"
                                    )}
                                    <FieldError
                                        error={props.errors.video}
                                        touched={props.touched.video}
                                    />
                                </label>
                                <Field
                                    id="video"
                                    name="video"
                                    onChange={props.handleChange}
                                    placeholder="https://www.youtube.com/watch?v=xxxxxxxx"
                                    type="text"
                                    value={props.values.video}
                                />

                                <label className="form-label" id="star-rating">
                                    How much did you like the track?
                                    {InfoTip(
                                        "rating",
                                        "Your overall opinion of the track you passed"
                                    )}
                                    <FieldError
                                        error={props.errors.rating}
                                        touched={props.touched.rating}
                                    />
                                </label>
                                <div id="star-rating">
                                    <Ratings
                                        rating={rating}
                                        widgetRatedColors="yellow"
                                        widgetHoverColors="green"
                                        widgetEmptyColors="red"
                                        changeRating={(event: any) => {
                                            props.setFieldValue(
                                                "rating",
                                                event
                                            );
                                            setRating(event);
                                        }}
                                    >
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                    </Ratings>
                                </div>
                            </div>

                            <Field
                                type="hidden"
                                name="rating"
                                id="rating-field"
                                value={rating}
                            />

                            <Field
                                type="hidden"
                                name="ninjaPoints"
                                id="ninjaPoints"
                                value={props.values.ninjaPoints}
                            />

                            <div className="submit-button">
                                <button
                                    className="form-button"
                                    type="submit"
                                    tabIndex={0}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                        <div className="submit-run-help-element">{help}</div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const marks = [
    {
        value: 1,
        label: "1",
    },

    {
        value: 2,
        label: "2",
    },

    {
        value: 3,
        label: "3",
    },

    {
        value: 4,
        label: "4",
    },

    {
        value: 5,
        label: "5",
    },

    {
        value: 6,
        label: "6",
    },

    {
        value: 7,
        label: "7",
    },

    {
        value: 8,
        label: "8",
    },
    {
        value: 9,
        label: "9",
    },
];

function valuetext(value: number) {
    return `${value}`;
}

export default SubmitRun;
