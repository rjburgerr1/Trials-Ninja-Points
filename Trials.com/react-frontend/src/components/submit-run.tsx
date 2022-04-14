import { useEffect, useState } from "react";
import {
    checkFaults,
    validateFaults,
} from "./helpers/run-submissions/validateFaultsInput";
import { checkTrackName } from "./helpers/run-submissions/validateTrackNameInput";
import { checkCreator } from "./helpers/run-submissions/validateCreatorInput";
import { CustomSelect } from "./data-entry/text-inputs";
import { Field, Form, Formik } from "formik";
import { FieldError } from "./helpers/field-error";
import { ImportRuns } from "./import-runs";
import { InfoTip } from "./help-info/info-tips";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List } from "./helpers/lists";
import { ScanLB } from "./helpers/scan-leaderboard";
import { NinjaLevelSlider } from "./helpers/run-submissions/ninja-level-slider";
import { SubmitRunSchema } from "./yup-schemas/submit-run-schemas";
import { useAuth } from "../contexts/auth-context";
import { validateTime } from "./helpers/run-submissions/validateTimeInput";
import axios from "axios";
import InputMask from "react-input-mask";
import moment from "moment";
import Ratings from "react-ratings-declarative";

// Shape of form values
interface FormValues {
    trackName: string;
    creator: string;
    faults: string;
    time: string;
    length: string;
    consistency: string;
    ninjaLevel: number;
    rating: number;
    rank: string;
    rider: any;
    video: string;
    ninjaPoints: number;
}

interface LocationState {
    runs: Array<string>;
    valid: boolean;
}

const SubmitRun = (props: any) => {
    const location = useLocation();
    let state = location.state as LocationState; // Type Casting, then you can get the params passed via router

    const help = props.help;
    const nextRun = props.nextRun;
    const previousRun = props.previousRun;
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const { currentUser } = useAuth();
    const [runs, setRuns] = useState([]);
    const [trackName, setTrackName] = useState();
    const [creator, setCreator] = useState();
    const [loading, setLoading] = useState(false);
    const [submissionNP, setSubmissionNP] = useState([""]);
    const [valid, setValid] = useState({
        trackName: false,
        creator: false,
        faults: false,
        time: true,
        length: false,
        consistency: false,
        ninjaLevel: false,
        rating: false,
        video: false,
    });

    useEffect(() => {
        let isValid = {
            time: moment(state?.runs[0][2], "mm:ss.SSS", true).isValid(),
            faults: checkFaults(state?.runs[0][3]),
            trackName: checkTrackName(state?.runs[0][0]),
            creator: checkCreator(state?.runs[0][1]),
        };

        setValid({
            ...valid,
            time: isValid.time,
        });
    }, [state?.valid]);

    // According to formik documentation, use formik values in place of props to prevent bugs with formik and also prevent having two versions of the same prop
    // needing to be maintained inside props and formik values
    const initialValues: FormValues = {
        trackName: state ? state.runs[index][0] : "",
        creator: state ? state.runs[index][1] : "",
        time: state ? state.runs[index][2] : "",
        faults: state ? state.runs[index][3] : "",
        length: "",
        consistency: "",
        ninjaLevel: NaN,
        rating: 0,
        rank: "",
        video: "",
        rider: currentUser,
        ninjaPoints: 0, // NinjaPoints are not inside the form but these initial values act as props for this component so storing ninjapoints here feels right
    };

    // Submit handler for submit-run form. Handles POST request and calculating NP for each run
    const handleOnSubmit = async (values: FormValues, actions: any) => {
        try {
            // Upload run (necessary to include it in np calculation for truest/ideal np value)
            // I suppose this could be reduced by removing a few prisma
            // invocations if we just send the run data to the
            // calculate-ninja-points route and then merge it with Javascript

            // Change these when possible. These are being initialized here because when importing runs
            // This component is rerendered and for some reason the initialValues for these specific fields
            // Don't get reinstantiated
            values.rider = currentUser;
            values.rank = "";
            values.ninjaPoints = 0;

            await axios.post("/submit-run", {
                ...values,
            });

            // Calculate Ninja Points for run (+update run/tracks row with np value)
            const response = await axios.post("/calculate-ninja-points", {
                ...values,
            });

            if (location.pathname === "/submit-run/import-runs") {
                window.scrollTo(0, 0);

                setSubmissionNP([
                    "Awarded Ninja Points for Last Run:\t",
                    response.data.ninjaPoints,
                ]);
            } else {
                // Show page with end result
                navigate("/submitted-run", {
                    state: { ninjaPoints: response.data.ninjaPoints },
                });
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const setClassName = (error: object, touched: object, value: object) => {
        if ((!error && touched) || (!error && !touched && value)) {
            return "valid";
        } else if (error && touched) {
            return "invalid";
        }
    };

    return (
        <div id="submit-page-container">
            <div id="ninja-points">{submissionNP}</div>
            <ImportRuns />
            <Formik
                initialValues={initialValues}
                validationSchema={SubmitRunSchema}
                validateOnMount={true}
                onSubmit={handleOnSubmit}
                enableReinitialize
            >
                {(props: any) => (
                    <Form>
                        <div className="submit-run-form-container">
                            <div className="submit-run-autofill-element">
                                <List
                                    items={runs}
                                    title={trackName}
                                    creator={creator}
                                    setFieldValue={props.setFieldValue}
                                />
                            </div>
                            <button
                                type="button"
                                id="previous-run-button"
                                onClick={() => {
                                    if (index >= 1) {
                                        setIndex(index - 1);
                                    } else {
                                        setIndex(state.runs.length - 1);
                                    }

                                    props.setValues({
                                        trackName: state.runs[index][0],
                                        creator: state.runs[index][1],
                                        time: state.runs[index][2],
                                        faults: state.runs[index][3],
                                        ninjaLevel: NaN,
                                        length: "",
                                        consistency: "",
                                        rating: 0,
                                        video: "",
                                    });
                                    props.setTouched({
                                        trackName: true,
                                        creator: true,
                                        time: true,
                                        faults: true,
                                    });
                                }}
                            >
                                <i className="icon">{previousRun}</i>
                            </button>
                            <div
                                className="submit-run-form"
                                id="submit-run-form"
                            >
                                <ScanLB
                                    isLoading={loading}
                                    user={currentUser}
                                    setTrackName={setTrackName}
                                    setCreator={setCreator}
                                    setRuns={setRuns}
                                    setFieldValue={props.setFieldValue}
                                    setLoading={setLoading}
                                />
                                <div className="form-inline-group">
                                    <Field
                                        id="rider"
                                        name="rider"
                                        type="hidden"
                                    />

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
                                        className={setClassName(
                                            props.errors.trackName,
                                            props.touched.trackName,
                                            props.values.trackName
                                        )}
                                        id="trackName"
                                        name="trackName"
                                        onChange={props.handleChange}
                                        placeholder="Turbine Terror"
                                        type="text"
                                        value={props.values.trackName}
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
                                        className={setClassName(
                                            props.errors.creator,
                                            props.touched.creator,
                                            props.values.creator
                                        )}
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
                                        className={setClassName(
                                            props.errors.faults,
                                            props.touched.faults,
                                            props.values.faults
                                        )}
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
                                            const { value } = event.target;
                                            validateFaults(props, value);
                                        }}
                                        value={props.values.faults}
                                    />
                                    <label className="form-label">
                                        Time
                                        {InfoTip(
                                            "time",
                                            "The time for your run on the track"
                                        )}
                                    </label>
                                    <FieldError
                                        id="time-error"
                                        error={props.errors.time}
                                        touched={props.touched.time}
                                    />
                                    <InputMask
                                        className={setClassName(
                                            props.errors.time,
                                            props.touched.time,
                                            props.values.time
                                        )}
                                        id="time-mask-field"
                                        placeholder="12:33.677"
                                        mask="99:99.999"
                                        name="time"
                                        type="text"
                                        onChange={(event: any) => {
                                            event.preventDefault();
                                            const { value } = event.target;
                                            validateTime(props, value);
                                        }}
                                        value={props.values.time}
                                    ></InputMask>
                                    <NinjaLevelSlider
                                        className={setClassName(
                                            props.errors.ninjaLevel,
                                            props.touched.ninjaLevel,
                                            props.values.ninjaLevel
                                        )}
                                        setFieldValue={props.setFieldValue}
                                        error={
                                            <FieldError
                                                error={props.errors.ninjaLevel}
                                                touched={
                                                    props.touched.ninjaLevel
                                                }
                                            />
                                        }
                                        value={props.values.ninjaLevel}
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
                                        className={
                                            setClassName(
                                                props.errors.length,
                                                props.touched.length,
                                                props.values.length
                                            ) + " formik-field"
                                        }
                                        id="length-field"
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
                                        className={
                                            setClassName(
                                                props.errors.consistency,
                                                props.touched.consistency,
                                                props.values.consistency
                                            ) + " formik-field"
                                        }
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
                                        <option
                                            value="Not_Very"
                                            label="Not Very"
                                        />
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
                                        className={setClassName(
                                            props.errors.video,
                                            props.touched.video,
                                            props.values.video
                                        )}
                                        id="video"
                                        name="video"
                                        onChange={props.handleChange}
                                        placeholder="https://www.youtube.com/watch?v=xxxxxxxx"
                                        type="text"
                                        value={props.values.video}
                                    />

                                    <label
                                        className="form-label"
                                        id="star-rating"
                                    >
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
                                            rating={props.values.rating}
                                            widgetRatedColors="yellow"
                                            widgetHoverColors="green"
                                            widgetEmptyColors="red"
                                            changeRating={(event: any) => {
                                                props.setFieldValue(
                                                    "rating",
                                                    event
                                                );
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
                                    value={props.values.rating}
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

                            <button
                                type="button"
                                id="next-run-button"
                                onClick={() => {
                                    if (index === state.runs.length - 1) {
                                        setIndex(0);
                                    } else {
                                        setIndex(index + 1);
                                    }
                                    props.setValues({
                                        trackName: state.runs[index][0],
                                        creator: state.runs[index][1],
                                        time: state.runs[index][2],
                                        faults: state.runs[index][3],
                                        ninjaLevel: NaN,
                                        length: "",
                                        consistency: "",
                                        video: "",
                                        rating: 0,
                                    });
                                    props.setTouched({
                                        trackName: true,
                                        creator: true,
                                        time: true,
                                        faults: true,
                                    });
                                }}
                            >
                                <i className="icon">{nextRun}</i>
                            </button>
                            <div className="submit-run-help-element">
                                {help}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SubmitRun;
