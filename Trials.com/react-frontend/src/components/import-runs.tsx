import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoTip } from "./help-info/info-tips";
import { FieldError } from "./helpers/field-error";
import { ImportRunSchema } from "./yup-schemas/import-run-schema";
import Loading from "../components/helpers/loading";

interface ImportValues {
    discordUser: string;
}

const importValues: ImportValues = {
    discordUser: "",
};

export const ImportRuns = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const instance = axios.create({
        baseURL: process.env.REACT_APP_AXIOS_FLASK_URL,
    });
    // Submit handler for submit-run form. Handles POST request and calculating NP for each run
    const handleImportRuns = async (values: ImportValues, actions: any) => {
        try {
            setIsLoading(true);
            if (values.discordUser) {
                const response = await instance.get("/flask/import-runs", {
                    params: { user: values.discordUser },
                });

                let runsStr = await response.data.match(
                    /(?<="data":)(.*)(?=})/g
                );
                const runs = await JSON.parse(runsStr);

                setIsLoading(false);
                if (runs.length > 0) {
                    navigate("/submit-run/import-runs", {
                        state: { runs: runs },
                    });
                } else {
                    console.log("No Runs");
                }
            }
        } catch (error: any) {
            console.log(error);
        }
    };
    return (
        <Formik
            initialValues={importValues}
            validationSchema={ImportRunSchema}
            onSubmit={handleImportRuns}
        >
            {(props: any) => (
                <Form>
                    <label className="form-label">
                        Import Runs from Trials-Reporter Bot
                        {InfoTip(
                            "import-runs",
                            "(This operation can take minutes to perform) The discord username that has runs submitted in the Trials-Reporter Bot by Gulzt"
                        )}
                        <FieldError
                            error={props.errors.discordUser}
                            touched={props.touched.discordUser}
                        />
                    </label>
                    <label className="form-label"></label>

                    <Field
                        id="discordUser"
                        name="discordUser"
                        onChange={props.handleChange}
                        placeholder="Dutch Noris"
                        type="text"
                        value={props.values.discordUser}
                    />
                    <Loading
                        className="loading"
                        type="spokes"
                        color="green"
                        height={25}
                        width={25}
                        isLoading={isLoading}
                    />

                    <div id="import-runs-button-container">
                        <button
                            className="form-button"
                            id="import-runs-button"
                            type="submit"
                            onClick={props.handleImportRuns}
                        >
                            Import Runs
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
