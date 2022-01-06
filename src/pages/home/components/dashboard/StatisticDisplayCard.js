import React from "react";
import './StatisticDisplayCard.css'

/**
 * The StatisticDisplayCard allows the user to specify data to be displayed in the card. It allows a number
 * to be displayed as the primary text and a label to be specified for that particular piece of data.
 * @constructor
 */
export const StatisticDisplayCard = () => {

    return (
        <div className='card__display__container'>
            <h2 className='card__display-h2'>{props.label}</h2>
            <p className='card__display-p'></p>
        </div>
    )

}