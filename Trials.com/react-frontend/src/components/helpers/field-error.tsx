export const FieldError = (props: any) => {
    return props.error && props.touched ? (
        <div className="field-error">{props.error}</div>
    ) : null;
};
