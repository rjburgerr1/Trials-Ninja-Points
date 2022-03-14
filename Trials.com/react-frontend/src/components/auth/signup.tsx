import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signupPrisma, checkIfUserExists } from "./prisma-signup";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { FieldError } from "../helpers/field-error";
import { SignupSchema } from "../yup-schemas/signup-schema";

interface FormValues {
    username: string;
    email: string;
    password: string;
}

const SignupComponent = () => {
    const { signup } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        try {
            setLoading(true);
            // Check if a user exists with the same username before creating
            // account on firebase to get uid to then add user to DB
            await checkIfUserExists(values.username);

            const response = await signup(
                values.email,
                values.password,
                values.username
            );

            await signupPrisma(
                values.email,
                values.username,
                response.user.uid
            );

            navigate("/");
        } catch (error: any) {
            console.log(error.message || error);
            setError(error.message || error);
        }
        setLoading(false);
    };

    const initialValues: FormValues = {
        username: "",
        email: "",
        password: "",
    };

    return (
        <div className="form-container sign-up-container">
            {error && <Alert variant="danger">{error}</Alert>}

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {(props: any) => (
                    <Form>
                        <h1 id="create-account-header">Create Account</h1>
                        <div className="form-inline-group">
                            <div className="social-container"></div>
                            <FieldError
                                error={props.errors.username}
                                touched={props.touched.username}
                            />
                            <Field
                                id="username"
                                name="username"
                                onChange={props.handleChange}
                                placeholder="Username"
                                type="text"
                                value={props.values.username}
                            />

                            <FieldError
                                error={props.errors.email}
                                touched={props.touched.email}
                            />
                            <Field
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={props.values.email}
                                autoComplete="false"
                            />

                            <FieldError
                                error={props.errors.password}
                                touched={props.touched.password}
                            />
                            <Field
                                id="password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={props.values.password}
                                autoComplete="new-password"
                            />
                        </div>

                        <button disabled={loading} type="submit">
                            Sign Up
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignupComponent;
