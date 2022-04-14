export const validateTime = (props: any, value: any) => {
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
            props.setFieldTouched("time", true);
            props.setFieldValue("time", value);
        }
    } else {
        props.setFieldTouched("time", true);
        // When Time is empty, set to empty
        props.setFieldValue("time", value);
    }
};
