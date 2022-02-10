import { Button, Modal } from "react-bootstrap";

const getId = (url: string) => {
    if (url) {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? match[2] : null;
    }
};

export const YoutubeEmbed = (props: any) => {
    const videoId = getId(props.embedURL);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <iframe
                className="embedded-video"
                width="864"
                height="486"
                src={"https://www.youtube.com/embed/" + videoId}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Modal>
    );
};
