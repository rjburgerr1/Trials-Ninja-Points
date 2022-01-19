import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

export const InfoTip = (fieldName: string, infoMessage: string) => {
    return (
        <span className="table-header-info-tip">
            <FontAwesomeIcon
                data-tip
                data-for={fieldName + "-info-tip"}
                icon={faQuestionCircle}
                size="1x"
            />

            <ReactTooltip
                className="info-tip"
                id={fieldName + "-info-tip"}
                place="top"
                effect="solid"
            >
                {infoMessage}
            </ReactTooltip>
        </span>
    );
};
