const router = (app) => {
    app.use(
        "/s3",
        require("../node_modules/react-s3-uploader/s3router")({
            bucket: "trials-np-images",
            region: "us-east-1", //optional
            signatureVersion: "v4", //optional (use for some amazon regions: frankfurt and others)
            signatureExpires: 60, //optional, number of seconds the upload signed URL should be valid for (defaults to 60)
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": "true",
            }, // optional
            ACL: "private", // this is default
            uniquePrefix: true, // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
        })
    );
};
// Export the router
module.exports = router;
