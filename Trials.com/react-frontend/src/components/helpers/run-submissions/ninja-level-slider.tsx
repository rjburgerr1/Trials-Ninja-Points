import { Link } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import { InfoTip } from "../../help-info/info-tips";

export const NinjaLevelSlider = (props: any) => {
    return (
        <div className={props.className ? props.className : ""}>
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
                {props.error}
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
                value={props.value}
                onChange={(event, value) => {
                    console.log(value);
                    props.setFieldValue("ninjaLevel", value);
                }}
            />
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
        label: "9",
    },
];

const valuetext = (value: number) => {
    return `${value}`;
};
