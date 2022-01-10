import * as Yup from "yup";
import axios from "axios";
import Loading from "../helpers/loading";
import { ImageUpload } from "../helpers/image-upload";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { Alert } from "react-bootstrap";
import { CustomTextField, CustomTextArea } from "../data-entry/text-inputs";

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    country: string;
    region: string;
    aliases: string;
    username: string;
    bannerURL: string;
}

export default function UpdateProfile() {
    const {
        currentUser,
        updatePassword,
        updateEmail,
        updateUsername,
        firebase,
    } = useAuth();
    const [initialValues, setInitialValues] = useState<FormValues | null>(null);

    const fileInput = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(currentUser.email);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(currentUser.displayName);

    // These are used as values to check against if the original value has changed when updating a profile
    const [bio, setBio] = useState(null);
    const [country, setCountry] = useState(null);
    const [region, setRegion] = useState(null);
    const [aliases, setAliases] = useState(null);
    const [bannerURL, setBannerURL] = useState(
        "https://trials-np-images.s3.amazonaws.com//uploads/defaultProfileBanner.png"
    );

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    useEffect(() => {
        const getProfile = async () => {
            const profile = await axios.get("profile-info", {
                params: { id: currentUser.uid },
            });

            setAliases(profile.data.aliases);
            setBio(profile.data.bio);
            setCountry(profile.data.country);
            setRegion(profile.data.region);

            setInitialValues({
                email: currentUser.email,
                password: "",
                confirmPassword: "",
                bio: profile.data.bio || "",
                // This is very odd syntactic sugar. All this is for is the 'disableWhenEmpty' prop on the Region selector.
                // Effectively, the data in our database defaults to "N/A" instead of null.
                // This means that the country state is never empty even when it should be. So when we retrieve a profile's country,
                // We decide to check if it's "N/A" and set country to empty so the disableWhenEmpty prop triggers
                country: profile.data.country || "N/A" ? "" : "",
                region: profile.data.region || "",
                aliases: profile.data.aliases || "",
                username: currentUser.displayName,
                bannerURL: profile.data.bannerURL || "",
            });
        };
        getProfile();
    }, [currentUser.displayName, currentUser.email, currentUser.uid]);

    // Formik onSubmit handler
    const handleOnSubmit = async (values: any) => {
        console.log(values);
        if (
            passwordRef.current &&
            passwordConfirmRef.current &&
            passwordRef.current.value !== passwordConfirmRef.current.value
        ) {
            return setError("Passwords do not match");
        }

        const promises = [];
        setLoading(true);
        setError("");

        if (
            emailRef.current &&
            emailRef.current.value &&
            emailRef.current.value !== currentUser.email
        ) {
            promises.push(updateEmail(emailRef.current.value));
            promises.push(
                axios.put("/email", {
                    id: currentUser.uid,
                    email: values.email,
                })
            );
        }
        if (
            passwordRef.current &&
            passwordRef.current.value &&
            passwordRef.current.value !== currentUser.password
        ) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        if (
            usernameRef.current &&
            usernameRef.current.value &&
            usernameRef.current.value !== currentUser.displayName
        ) {
            promises.push(updateUsername(usernameRef.current.value));
            promises.push(
                axios.put("/username", {
                    id: currentUser.uid,
                    username: values.username,
                })
            );
        }

        if (values.aliases && values.aliases !== aliases) {
            promises.push(
                axios.put("/aliases", {
                    id: currentUser.uid,
                    aliases: values.aliases,
                })
            );
        }

        if (values.bio && values.bio !== bio) {
            promises.push(
                axios.put("/bio", {
                    id: currentUser.uid,
                    bio: values.bio,
                })
            );
        }

        // If a region is selected, a country must be selected, so we start with a country + region  condition, and fallback to just country
        if (
            values.country &&
            values.region &&
            values.country !== country &&
            values.region !== region
        ) {
            promises.push(
                axios.put("/country-region", {
                    id: currentUser.uid,
                    country: values.country,
                    region: values.region,
                })
            );
        } else if (values.country && values.country !== country) {
            promises.push(
                axios.put("/country", {
                    id: currentUser.uid,
                    country: values.country,
                })
            );
        }

        // Stack all pending updates to be called
        if (promises.length !== 0) {
            Promise.all(promises)
                .then(() => {
                    setConfirmation(true);
                })
                .catch((error: any) => {
                    if (error.code === "auth/requires-recent-login") {
                        console.log(error);

                        var password = prompt(
                            "Please enter your password to change username. Try Again!"
                        );
                        var credential =
                            firebase.auth.EmailAuthProvider.credential(
                                currentUser.email,
                                password
                            );
                        currentUser.reauthenticateWithCredential(credential);
                    }

                    setError("Failed to update account, Try Again!");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setConfirmation(false);
            setLoading(false);
        }
    };

    const UpdateProfileSchema = Yup.object({
        email: Yup.string().max(320, "Email is too long"),
        password: Yup.string().min(6).max(60),
        bio: Yup.string().max(300, "Bio is too long").nullable(),
        region: Yup.string().max(100).nullable(),
        country: Yup.string().max(3).nullable(),
        aliases: Yup.string().max(150).nullable(),
        username: Yup.string().max(25),
        bannerURL: Yup.string().nullable(),
    });

    return confirmation === true ? ( // Update view to show the profile is updated if it has been
        <div id="updated-profile">Updated Profile!</div>
    ) : // Wait for initial values for profile fields to be retrieved with axios GET request.
    initialValues ? (
        <div id="update-profile-container">
            <Formik
                initialValues={initialValues}
                validationSchema={UpdateProfileSchema}
                onSubmit={handleOnSubmit}
            >
                {(props) => (
                    <Form>
                        <div className="form-container">
                            {error && <Alert variant="danger">{error}</Alert>}

                            <CustomTextField
                                label="Username"
                                type="text"
                                id="username-field"
                                className="formik-field"
                                name="username"
                                placeholder="Spasticated-Mhole12"
                                innerRef={usernameRef}
                                autoComplete="off"
                                value={props.values.username}
                            />

                            <CustomTextField
                                label="Email Address"
                                type="email"
                                id="email-field"
                                className="formik-field"
                                name="email"
                                placeholder="local@domain.com"
                                innerRef={emailRef}
                                autoComplete="off"
                                value={props.values.email}
                            />

                            <CustomTextField
                                label="Password"
                                id="password-field"
                                className="formik-field"
                                name="updaste-password"
                                onChange={props.handleChange}
                                placeholder="adl12=da0q-12lpf'a"
                                type="password"
                                innerRef={passwordRef}
                                defaultValue={""}
                                autoComplete="new-password"
                            />

                            <CustomTextField
                                label="Confirm Password"
                                id="confirm-password-field"
                                className="formik-field"
                                name="confirmPassword"
                                onChange={props.handleChange}
                                placeholder="adl12=da0q-12lpf'a"
                                type="password"
                                innerRef={passwordConfirmRef}
                                value={props.values.confirmPassword}
                                autoComplete="new-password"
                            />

                            <CustomTextArea
                                label="Bio"
                                id="bio-field"
                                className="formik-field"
                                rows="5"
                                name="bio"
                                onChange={props.handleChange}
                                placeholder="...Top 10 Speedrunner on Fusion \n top 5 Speedrunner in Rising. 48/50 Level 7's passed."
                                type="text"
                                value={props.values.bio}
                            />

                            <CustomTextArea
                                label="Aliases"
                                id="aliases-field"
                                className="formik-field"
                                rows="3"
                                name="aliases"
                                onChange={props.handleChange}
                                placeholder="Benjoid, Zyntax, Zyn_FN, Zeus_legend, poigduh60, Zyn, Wackiest_benjoid"
                                type="text"
                                value={props.values.aliases}
                            />

                            <label className="form-label">Origin</label>
                            <CountryDropdown
                                id="country-select"
                                name="country"
                                value={props.values.country}
                                onChange={(_, e) => props.handleChange(e)}
                                onBlur={props.handleBlur}
                                valueType="short"
                            />
                            <RegionDropdown
                                id="region-select"
                                blankOptionLabel="Select Region"
                                countryValueType="short"
                                disableWhenEmpty={true}
                                name="region"
                                country={props.values.country}
                                value={props.values.region}
                                onChange={(_, e) => props.handleChange(e)}
                                onBlur={props.handleBlur}
                            />

                            <label className="form-label">Profile Banner</label>
                            <div id="image-upload-input">
                                <ImageUpload />
                            </div>
                            <div className="submit-button">
                                <button
                                    disabled={loading}
                                    id="form-button"
                                    type="submit"
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="text-center">
                <Link to="/">Cancel</Link>
            </div>
        </div>
    ) : (
        <Loading type="spokes" color="green" />
    );
}
