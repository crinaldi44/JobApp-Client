import React from 'react'
import StatusMarker from "./StatusMarker";
import OptionsGroup from "./options/OptionsGroup";

/**
 * Represents a cell within the application table.
 * @returns {JSX.Element}
 * @constructor
 */
const ApplicationTableCell = (props) => {
    return (
        <tr>
            <td>{props.application.business_name}</td>
            <td>{props.application.business_description}</td>
            <td>{props.application.role_type}</td>
            <td><StatusMarker text={props.application.status}/></td>
            <td>{props.application.submitted_date.substring(0,10)}</td>
            <td><OptionsGroup app={props.application} rerender={props.rerender}/></td>
        </tr>
    )
}

export default ApplicationTableCell
