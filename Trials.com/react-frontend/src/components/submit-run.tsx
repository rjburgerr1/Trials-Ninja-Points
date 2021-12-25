import React, { useState } from "react";

import { CalcNP } from "./calculate-ninja-points";
import { Form, Field, Formik } from "formik";
import { useAuth } from "../contexts/auth-context";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import InputMask from "react-input-mask";
import moment from "moment";
import Ratings from "react-ratings-declarative";

import Slider from "@material-ui/core/Slider";

// Shape of form values
interface FormValues {
    trackName: string;
    creator: string;
    faults: number;
    time: string;
    length: string;
    consistency: string;
    ninjaLevel: number;
    rating: number;
    rank: number;
    rider: string;
    ninjaPoints: number;
}

const SubmitRun = () => {
    const { currentUser } = useAuth();
    const history = useHistory();
    const [rating, setRating] = useState();

    // According to formik documentation, use formik values in place of props to prevent bugs with formik and also prevent having two versions of the same prop
    // needing to be maintained inside props and formik values
    const initialValues: FormValues = {
        trackName: "",
        creator: "",
        faults: NaN,
        time: "",
        length: "",
        consistency: "",
        ninjaLevel: NaN,
        rating: NaN,
        rank: NaN,
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
    const handleOnSubmit = async (values: object, actions: any) => {
        // Calculate Ninja Points for run
        const ninjaPoints = await CalcNP({
            ...values,
        });

        const payload = {
            ...values,
            ninjaPoints: ninjaPoints,
            rating: rating,
        }; // Construct the new payload, inject ninjaPoints that have just been calculated

        try {
            await axios.post("/submitted-run", {
                ...payload,
            });
        } catch (error: any) {
            console.log(error);
        }
        history.push({
            pathname: "/submitted-run",
            state: { np: ninjaPoints },
        });
    };

    const SubmitRunSchema = Yup.object({
        trackName: Yup.string()
            .max(30, "Name is too long")
            .required("Required"),
        creator: Yup.string().max(15, "Name is too long").required("Required"),
        faults: Yup.number()
            .min(0, "Minimum number of faults is 0!")
            .max(499, "Maximum number of faults is 499!")
            .integer("Faults are required, and must be integers"),

        time: Yup.string()
            .required("Time cannot be empty")
            .test(
                "is-greater",
                "Time should be in mm:ss.SSS format & <= 29:59.999",
                function (value) {
                    return moment(value, "mm:ss.SSS", true).isValid(); // Make sure time is fully filled out in the
                }
            ),
        length: Yup.string().required("Required"),
        consistency: Yup.string().required("Required"),
        ninjaLevel: Yup.number().required("Required"),
        rating: Yup.string().required("Required"),
        rank: Yup.number().min(1, "Minimum rank is 1!").required("Required"),
    });

    return (
        <div className="submit-run-form-container">
            <div className="submit-run-form" id="submit-run-form">
                <Formik
                    initialValues={initialValues}
                    validationSchema={SubmitRunSchema}
                    onSubmit={handleOnSubmit}
                >
                    {(props) => (
                        <Form>
                            <div className="form-inline-group">
                                <Field id="rider" name="rider" type="hidden" />

                                <label>Track Name</label>
                                <Field
                                    autoFocus
                                    id="trackName"
                                    name="trackName"
                                    onChange={props.handleChange}
                                    placeholder="Turbine Terror"
                                    type="text"
                                    value={props.values.trackName}
                                />
                                {props.errors.trackName &&
                                props.touched.trackName ? (
                                    <div className="field-error">
                                        {props.errors.trackName}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.trackName}
                                    </div>
                                )}

                                <label>Creator</label>
                                <Field
                                    id="creator"
                                    name="creator"
                                    onChange={props.handleChange}
                                    placeholder="Slikscythez"
                                    type="text"
                                    value={props.values.creator}
                                />
                                {props.errors.creator &&
                                props.touched.creator ? (
                                    <div className="field-error">
                                        {props.errors.creator}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.creator}
                                    </div>
                                )}

                                <label>Rank</label>
                                <Field
                                    id="rank"
                                    name="rank"
                                    onChange={props.handleChange}
                                    onKeyDown={(event: any) =>
                                        (event.key === "e" ||
                                            event.key === "E" ||
                                            event.key === "-" ||
                                            event.key === "+" ||
                                            event.key === ".") &&
                                        event.preventDefault()
                                    }
                                    placeholder="7"
                                    type="number"
                                    value={props.values.rank}
                                />
                                {props.errors.rank && props.touched.rank ? (
                                    <div className="field-error">
                                        {props.errors.rank}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.rank}
                                    </div>
                                )}

                                <label>Ninja Level</label>
                                <Slider
                                    id="slider"
                                    defaultValue={0.5}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-custom"
                                    step={0.5}
                                    min={0.5}
                                    max={9.5}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    name="ninjaLevel"
                                    onChange={(event, value) =>
                                        props.setFieldValue("ninjaLevel", value)
                                    }
                                />
                                {props.errors.ninjaLevel &&
                                props.touched.ninjaLevel ? (
                                    <div className="field-error">
                                        {props.errors.ninjaLevel}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.ninjaLevel}
                                    </div>
                                )}

                                <label>Faults</label>
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
                                    value={props.values.faults}
                                />
                                {props.errors.faults && props.touched.faults ? (
                                    <div className="field-error">
                                        {props.errors.faults}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.faults}
                                    </div>
                                )}

                                <label>Time</label>
                                <InputMask
                                    placeholder="12:33.677"
                                    mask="99:99.999"
                                    name="time"
                                    type="text"
                                    onChange={(event: any) => {
                                        event.preventDefault();
                                        const { value } = event.target;
                                        restrictTime(props, value);
                                    }}
                                    value={props.values.time}
                                ></InputMask>
                                {props.errors.time && props.touched.time ? (
                                    <div className="field-error">
                                        {props.errors.time}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.time}
                                    </div>
                                )}

                                <label>Length</label>
                                <select
                                    name="length"
                                    onChange={props.handleChange}
                                    value={props.values.length}
                                >
                                    <option
                                        value=""
                                        label="Select Length of track"
                                    />
                                    <option value="Short" label="Short" />
                                    <option value="Medium" label="Medium" />
                                    <option value="Long" label="Long" />
                                </select>
                                {props.errors.length && props.touched.length ? (
                                    <div className="field-error">
                                        {props.errors.length}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.length}
                                    </div>
                                )}

                                <label>Consistency</label>
                                <select
                                    name="consistency"
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
                                </select>
                                {props.errors.consistency &&
                                props.touched.consistency ? (
                                    <div className="field-error">
                                        {props.errors.consistency}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.consistency}
                                    </div>
                                )}

                                <label id="star-rating">
                                    How much did you like the track?
                                </label>
                                <div id="star-rating">
                                    <Ratings
                                        rating={rating}
                                        widgetRatedColors="yellow"
                                        widgetHoverColors="green"
                                        widgetEmptyColors="red"
                                        changeRating={setRating}
                                    >
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                        <Ratings.Widget />
                                    </Ratings>
                                </div>
                            </div>
                            {props.errors.rating && props.touched.rating ? (
                                <div className="field-error">
                                    {props.errors.rating}
                                </div>
                            ) : (
                                <div className="field-error-invisible">
                                    {props.errors.rating}
                                </div>
                            )}

                            <Field
                                type="hidden"
                                name="ninjaPoints"
                                id="ninjaPoints"
                                value={props.values.ninjaPoints}
                            />

                            <div className="submit-button">
                                <button id="form-button" type="submit">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

/* Save
 validateForm().then((errors) => {
                                            if (
                                                Object.entries(errors)
                                                    .length === 0
                                            ) {
                                                // verify if errors object is equals to '{}' an empty object
                                                console.log("valid");
                                            } else {
                                                console.log("errors: ", errors);
                                                console.log(props.values);
                                            }
                                        });
*/

/* Save this for later in case we can allow people to submit runs for others in the future
 {props.errors.rider && props.touched.rider ? (
                                    <div className="field-error">
                                        {props.errors.rider}
                                    </div>
                                ) : (
                                    <div className="field-error-invisible">
                                        {props.errors.rider}
                                    </div>
                                )}
*/

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
