import { useState } from "react";
import { YoutubeEmbed } from "./video-embed";

export const YoutubeModal = (props: any) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <button
                className="video-link-button"
                onClick={() => setModalShow(true)}
            >
                Video
            </button>
            <YoutubeEmbed
                embedURL={props.url}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};
