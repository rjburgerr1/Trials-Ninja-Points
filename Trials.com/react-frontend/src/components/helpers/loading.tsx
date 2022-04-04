import React from "react";
import ReactLoading from "react-loading";

interface LoadingProps {
    className?: string;
    type: any;
    color: string;
    height: number;
    width: number;
    isLoading?: boolean;
}

const Loading = (props: LoadingProps) => {
    if (props.isLoading && props.isLoading === true) {
        return (
            <ReactLoading
                className={props.className}
                type={props.type}
                color={props.color}
                height={props.height}
                width={props.width}
            />
        );
    } else {
        return <></>;
    }
};

export default Loading;
