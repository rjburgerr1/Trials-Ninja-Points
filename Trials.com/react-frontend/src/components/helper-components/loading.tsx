import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }: { type: any; color: string }) => (
    <ReactLoading type={type} color={color} height={667} width={375} />
);

export default Loading;
