import React from "react";

import { useFormik, Formik } from "formik";
import InputMask from "react-input-mask";
import Slider from "@material-ui/core/Slider";
import ReactStars from "react-rating-stars-component";
import { CalcNP } from "./calculate-ninja-points";

// Shape of form values
interface FormValues {
    trackName: string;
    creator: string;
    faults: number;
    time: string;
    length: string;
    faultSponginess: string;
    ninjaLevel: number;
    rating: number;
    rank: number;
    rider: string;
    ninjaPoints: number;
}

const SubmitRun = (props: any) => {
    // According to formkik documentation, use formik values in place of props to prevent bugs with formik and also prevent having two versions of the same prop
    // needing to be maintained inside props and formik values
    const initialValues: FormValues = {
        trackName: "",
        creator: "",
        faults: NaN,
        time: "",
        length: "",
        faultSponginess: "",
        ninjaLevel: NaN,
        rating: NaN,
        rank: NaN,
        rider: "",
        ninjaPoints: 0, // NinjaPoints are not inside the form but these initial values act as props for this component so storing ninjapoints here feels right
    };

    const formik = useFormik({
        initialValues: { ...initialValues },
        onSubmit() {
            console.log(formik.values);
        },
    });

    const setRating = (ratingValue: number) => {
        formik.setFieldValue("rating", ratingValue);
    };

    const restrictFaults = (value: any) => {
        if (
            value.length <= 3 &&
            ((value < 500 && value >= 0) || value === "")
        ) {
            formik.setFieldValue("faults", value);
        }
    };

    return (
        <div className="submit-run-form-container">
            <div className="submit-run-form" id="submit-run-form">
                <Formik
                    initialValues={formik.initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                >
                    <form
                        action="http://localhost:3002/submitted-run"
                        method="POST"
                    >
                        <div className="form-inline-group">
                            <label>Rider</label>
                            <input
                                placeholder="RJ Burgerr1"
                                id="rider"
                                name="rider"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.rider}
                                autoFocus
                            />

                            <label>Track Name</label>
                            <input
                                placeholder="Turbine Terror"
                                id="trackName"
                                name="trackName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.trackName}
                            />

                            <label>Creator</label>
                            <input
                                placeholder="Slikscythez"
                                id="creator"
                                name="creator"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.creator}
                            />

                            <label>Rank</label>
                            <input
                                placeholder="7"
                                id="rank"
                                name="rank"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.rank}
                            />

                            <label>Ninja Level</label>
                            <Slider
                                id="slider"
                                defaultValue={0.5}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-custom"
                                step={0.5}
                                min={0.5}
                                max={8.5}
                                valueLabelDisplay="auto"
                                marks={marks}
                                name="ninjaLevel"
                                onChange={(event, value) =>
                                    formik.setFieldValue("ninjaLevel", value)
                                }
                            />

                            <label>Faults</label>
                            <input
                                placeholder="241"
                                id="faults"
                                name="faults"
                                type="number"
                                onKeyDown={(evt) =>
                                    (evt.key === "e" ||
                                        evt.key === "E" ||
                                        evt.key === "-" ||
                                        evt.key === "+" ||
                                        evt.key === ".") &&
                                    evt.preventDefault()
                                }
                                onChange={(event) => {
                                    event.preventDefault();
                                    const { value } = event.target;
                                    restrictFaults(value);
                                }}
                                value={formik.values.faults}
                            />

                            <label>Time</label>
                            <InputMask
                                placeholder="12:33.677"
                                mask="99:99.999"
                                name="time"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.time}
                            ></InputMask>

                            <label>Length</label>
                            <select
                                name="length"
                                onChange={formik.handleChange}
                                value={formik.values.length}
                            >
                                <option
                                    value=""
                                    label="Select Length of track"
                                />
                                <option value="Short" label="Short" />
                                <option value="Medium" label="Medium" />
                                <option value="Long" label="Long" />
                            </select>

                            <label>Fault Sponginess</label>
                            <select
                                name="faultSponginess"
                                onChange={formik.handleChange}
                                value={formik.values.faultSponginess}
                            >
                                <option
                                    value=""
                                    label="Select Fault Sponginess of track"
                                />
                                <option value="Not_At_All" label="Not At All" />
                                <option value="Not_Very" label="Not Very" />
                                <option value="Moderately" label="Moderately" />
                                <option value="Very" label="Very" />
                                <option value="Extremely" label="Extremely" />
                            </select>
                        </div>
                        <label id="star-rating">
                            How much did you like the track?
                        </label>
                        <div id="star-rating">
                            <ReactStars
                                {...Stars}
                                id="star-rating"
                                color="#5d737eff" // Cadet
                                activeColor="#fdd643ff" // Yellow
                                onChange={setRating}
                            />
                        </div>

                        <input
                            type="hidden"
                            name="rating"
                            id="rating"
                            value={formik.values.rating}
                        />
                        <input
                            type="hidden"
                            name="ninjaPoints"
                            id="ninjaPoints"
                            value={formik.values.ninjaPoints}
                        />
                        <div className="submit-button">
                            <button
                                id="form-button"
                                type="submit"
                                onClick={() => {
                                    // This onClick is formatted in such a way to prevent stale values being sent to database.
                                    // when formik values such as ninjaPoints are set with setFieldValue, the component will not rerender after submit.
                                    // This is why we have to calculate the NP value and inject it into formiks values inside the onClick signature.
                                    // This could be avoided with a change from using formik.values to useing props. However, there are benefits to using formik.values as "props" with forms
                                    const ninjaPoints = CalcNP({
                                        ...formik.values,
                                    });
                                    const payload = {
                                        ...formik.values,
                                        ninjaPoints: ninjaPoints,
                                    }; // Construct the new payload, inject ninjaPoints that have just been calculated
                                    formik.setValues(payload); // Updates Formik's internal state
                                    formik.setSubmitting(false);
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </Formik>
            </div>
        </div>
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
];

const Stars = {
    size: 50,
    value: 0,
    isHalf: true,
    a11y: true,
    activeColor: "blue",
};

function valuetext(value: number) {
    return `${value}`;
}

export default SubmitRun;
