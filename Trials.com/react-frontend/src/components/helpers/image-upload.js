import ReactS3Uploader from "react-s3-uploader";

export const ImageUpload = () => {
    return (
        <ReactS3Uploader
            signingUrl="/s3/sign"
            signingUrlMethod="GET"
            accept="image/*"
            s3path="/uploads/"
            signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
            uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
            contentDisposition="auto"
            scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
            server="http://localhost:3002"
            autoUpload={true}
        />

        // <ReactS3Uploader // This component provides a way to send requests to our node server in place of axios that we normally use
        //     signingUrl="/s3/sign"
        //     signingUrlMethod="GET"
        //     accept="image/*"
        //     s3path="/uploads/"
        //     signingUrlWithCredentials={true} // in case when need to pass authentication credentials via CORS
        //     uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
        //     contentDisposition="auto"
        //     scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
        //     server="http://localhost:3002"
        //     autoUpload={true}
        // />
    );
};
