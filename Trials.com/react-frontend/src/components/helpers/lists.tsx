import { ListGroup } from "react-bootstrap";

export const List = (props: any) => {
    const creator = props.creator ? props.creator : "{Unknown}";
    return props.items.length !== 0 ? (
        <ListGroup className="list-group">
            <ListGroup.Item
                className="list-group-title"
                bsPrefix="list-group-title"
                active
            >
                <b>{props.title}</b>
                <p>
                    by <b>{creator}</b>
                </p>
            </ListGroup.Item>
            <ListGroup.Item
                className="list-group-header"
                bsPrefix="list-group-header"
            >
                <b>Faults</b> <b>Time</b>
            </ListGroup.Item>
            {props.items.map((row: Array<string>, i: any) => {
                return (
                    <ListGroup.Item
                        className="list-group-element"
                        bsPrefix="list-group-element"
                        key={i}
                        action
                        onClick={async () => {
                            await props.setFieldValue("time", row[0]);
                            await props.setFieldValue("faults", row[1]);
                        }}
                    >
                        <div id="list-faults">
                            <p>{row[1]}</p>
                        </div>
                        <div id="list-time">
                            <p>{row[0]}</p>
                        </div>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    ) : (
        <></>
    );
};
