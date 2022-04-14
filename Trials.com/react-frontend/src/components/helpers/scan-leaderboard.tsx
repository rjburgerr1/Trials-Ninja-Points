import axios from "axios";
import { Link } from "react-router-dom";
import { InfoTip } from "../help-info/info-tips";
import { fileUpload } from "./file-upload";
import Loading from "./loading";

export const ScanLB = (props: any) => {
    return (
        <div>
            <label className="form-label">
                <Link
                    className="form-link"
                    to={"/submit-run/scan-lb-help"}
                    replace={false}
                    tabIndex={-1}
                >
                    Scan Leaderboard?
                </Link>
                {InfoTip(
                    "scan-leaderboard",
                    "This will take an image of an in-game leaderboard to scan. It will then autofill parts of this submission form with your run info."
                )}
            </label>

            <div id="image-upload-input">
                <input
                    id="scan-lb-input"
                    type="file"
                    name="banner"
                    onChange={(e) => {
                        try {
                            if (e.target.files) {
                                scan(
                                    e.target.files[0],
                                    e.target.files[0].name,
                                    props
                                );
                            }
                        } catch (error: any) {}
                    }}
                    accept="image/*"
                />
                <Loading
                    className="loading"
                    type="spokes"
                    color="green"
                    height={20}
                    width={20}
                    isLoading={props.isLoading}
                />
            </div>
        </div>
    );
};

const scan = async (file: File, filename: string, props: any) => {
    try {
        props.setLoading(true);
        const instance = axios.create({
            baseURL: process.env.REACT_APP_AXIOS_FLASK_URL,
        });
        // Upload leaderboard/select track screen to
        const s3File = await fileUpload(file, props.user, "leaderboards");

        const response = await instance.get("/flask/read-lb", {
            params: { fileURL: s3File.data.banner_url },
        });

        let runsStr = response.data[0].match(/(?<="data":)(.*)(?=})/g);
        let runsArr = JSON.parse(runsStr);

        props.setTrackName(response.data[1]);
        props.setCreator(response.data[2]);
        await props.setFieldValue("trackName", response.data[1]);
        await props.setFieldTouched("trackName");
        await props.setFieldTouched("faults");
        await props.setFieldValue("creator", response.data[2], true);

        props.setRuns(runsArr);
        props.setLoading(false);
    } catch (error) {
        console.error(error);
    }
};
