export const validateFaults = (props: any, value: any) => {
    if (value.length <= 3 && ((value < 500 && value >= 0) || value === "")) {
        props.setFieldTouched("faults", true);
        props.setFieldValue("faults", value);
    }
};

export const checkFaults = (value: any) => {
    if (value?.length <= 3 && value < 500 && value >= 0) {
        return true;
    }
};
