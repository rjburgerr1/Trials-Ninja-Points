export const FieldError = (props: any) => {
    return props.error && props.touched ? (
        <div id={props.id ? props.id : ""} className="field-error">
            {props.error}
        </div>
    ) : null;
};
