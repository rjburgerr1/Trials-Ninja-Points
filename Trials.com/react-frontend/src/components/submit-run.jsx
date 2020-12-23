import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import Star from "react-star-rating-component";
import { useFormik, Formik } from "formik";
import InputMask from "react-input-mask";
import Slider from "@material-ui/core/Slider";
import ReactStars from "react-rating-stars-component";
import NavBar from "./navbar";

const SubmitRun = () => {
  const formik = useFormik({
    initialValues: {
      trackName: "",
      creator: "",
      faults: "",
      time: "",
      length: "",
      faultSponginess: "",
      ninjaLevel: "",
      rating: "",
    },
  });

  const setRating = (ratingValue) => {
    formik.setFieldValue("rating", ratingValue);
  };

  const restrictFaults = (value) => {
    if (value < 500) {
      formik.setFieldValue("faults", value);
    }
  };

  return (
    <div>
      <NavBar />
      <Formik>
        <form action="http://localhost:3002/submitted-run" method="post">
          <label>Track Name</label>
          <input
            placeholder="Turbine Terror"
            id="trackName"
            name="trackName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.trackName}
            autoFocus
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
          <label>Ninja Level</label>
          <Slider
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
            onChange={(e) => {
              e.preventDefault();
              const { value } = e.target;
              restrictFaults(value);
            }}
            value={formik.values.faults}
          />
          <label>Time</label>

          <InputMask
            placeholder="12:33.677"
            mask="99:99:999"
            name="time"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.time}
          ></InputMask>
          <label>Length</label>
          <select
            name="length"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.length}
          >
            <option value="" label="Select Length of track" />
            <option value="Short" label="Short" />
            <option value="Medium" label="Medium" />
            <option value="Long" label="Long" />
          </select>
          <label>Fault Sponginess</label>
          <select
            name="faultSponginess"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.faultSponginess}
          >
            <option value="" label="Select Fault Sponginess of track" />
            <option value="Not At All" label="Not At All" />
            <option value="Not Very" label="Not Very" />
            <option value="Moderately" label="Moderately" />
            <option value="Very" label="Very" />
            <option value="Extremely" label="Extremely" />
          </select>
          <label>How did you like the track? (optional)</label>
          <ReactStars {...Stars} onChange={setRating} />
          <button type="submit">Submit</button>
        </form>
      </Formik>
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

  {
    value: 9,
  },
];

const Stars = {
  size: 50,
  value: 0,
  isHalf: true,
  a11y: true,
  activeColor: "blue",
};

function valuetext(value) {
  return `${value}`;
}

SubmitRun.propTypes = {
  length: PropTypes.oneOf(["Short"], ["Medium"], ["Long"]).isRequired,
  faultSponginess: PropTypes.oneOf(
    ["Not At All"],
    ["Not Very"],
    ["Moderately"],
    ["Very"],
    ["Extremely"]
  ).isRequired,
  ninjaLevel: PropTypes.oneOf(
    [0.5],
    [1],
    [1.5],
    [2],
    [2.5],
    [3],
    [3.5],
    [4],
    [4.5],
    [5],
    [5.5],
    [6],
    [6.5],
    [7],
    [7.5],
    [8],
    [8.5],
    [9]
  ).isRequired,
  time: PropTypes.instanceOf(Moment).isRequired,
  faults: PropTypes.number.isRequired,
  creator: PropTypes.string.isRequired,
  rating: PropTypes.instanceOf(Star),
  trackName: PropTypes.string.isRequired,
};

export default SubmitRun;
