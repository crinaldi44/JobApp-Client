import React from "react";
import './StatusMarker.css'

/**
 * The StatusMarker is a small component that displays the status of an application.
 * @constructor
 */
const StatusMarker = (props) => {

    const possibleColors = {
        "PENDING": "yellow",
        "REJECTED": "red",
        "ACCEPTED": "green",
    }

    return (
        <span className='status__marker__container' data-color={possibleColors[props.text]}>
            {props.text}
        </span>
    )
}

export default StatusMarker