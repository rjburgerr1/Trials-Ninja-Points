import NavBar from "../components/helpers/navbar";

/**
 * This is our component for generic pages
 * The layout for generic pages are as follows:
 * One Navigation bar header + One component for the body
 *
 * If we need a more complicated layout, create a separate page for the component
 *
 * @param props
 * @returns
 */
export default function GenericPage(props: any) {
    return (
        <div className="page-container">
            <div className="page-header">
                <NavBar {...props} />
            </div>
            <div className="page-body" id={props.bodyID}>
                {props.component}
            </div>
        </div>
    );
}
