import S3FileUpload from "react-s3";
import axios from "axios";

export const fileUpload = async (file: File, currentUser: any) => {
    //s3 bucket details
    const config = {
        bucketName: "trialsnp-photos",
        region: "us-east-1",
        dirName: "profiles/banners" /* optional */,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        filePrefix: currentUser.uid,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    };

    try {
        // Upload image to s3
        const data = await S3FileUpload.uploadFile(file, config);

        await axios.put("/upload-profile-banner", {
            id: currentUser.uid,
            banner: data.location,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
