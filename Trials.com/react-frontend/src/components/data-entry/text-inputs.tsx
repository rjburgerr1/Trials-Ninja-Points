import { useField } from "formik";
import styled from "styled-components";

export const CustomTextArea = ({ label, ref, ...props }: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    return (
        <>
            <label
                className="form-label"
                id={props.id}
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="field-error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const CustomTextField = ({ label, innerRef, ...props }: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);

    return (
        <>
            <label
                className="form-label"
                id={props.id}
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <input
                className="text-input"
                {...field}
                {...props}
                ref={innerRef}
            />
            {meta.touched && meta.error ? (
                <div className="field-error">{meta.error}</div>
            ) : null}
        </>
    );
};

export const CustomSelect = ({ label, ...props }: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <label
                className="form-label"
                id={props.id}
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <select {...field} {...props} />
            {/* {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null} */}
        </>
    );
};

// Styled components ....
const StyledSelect = styled.select`
    color: var(--blue-700);
`;

const StyledErrorMessage = styled.div`
    font-size: 12px;
    color: var(--red-600);
    width: 400px;
    margin-top: 0.25rem;
    &:before {
        content: "❌ ";
        font-size: 10px;
    }
    @media (prefers-color-scheme: dark) {
        color: var(--red-300);
    }
`;

const StyledLabel = styled.label`
    margin-top: 1rem;
`;
