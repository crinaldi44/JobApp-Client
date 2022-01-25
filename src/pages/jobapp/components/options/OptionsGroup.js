import React from "react";
import './OptionsGroup.css'
import ReactToolTip from "react-tooltip";
import {AcceptRejectModal} from "./AcceptRejectModal";
import axios from "axios";
import {ModifyModal} from "./ModifyModal";

/**
 * The OptionsGroup stateless functional component allows a user to modify a given component. For each table cell,
 * the object from the database entry is passed as a prop. Upon clicking an object, the ID is passed down further to a
 * confirmation modal, which will confirm that the user wishes to proceed with the operation OR it presents
 * with a popup to change the settings from the application.
 * @param props props.app stores the application as a prop, so as to prepare the options modal
 * @returns {JSX.Element}
 * @constructor
 */
const OptionsGroup = (props) => {

    /**
     * Handles action taken when the user marks an item as accepted.
     */
    const handleMarkAccepted = async () => {
        await axios.patch(`${process.env.REACT_APP_PRODUCTION_ADDRESS}/${props.app.id}`, {
            status: 'ACCEPTED'
        }).then(props.rerender()).catch(error => console.error(error))
    }

    /**
     * Handles action taken when the user marks an item as rejected.
     */
    const handleDeleteApp = async () => {
        await axios.delete(`${process.env.REACT_APP_PRODUCTION_ADDRESS}/${props.app.id}`)
            .then(props.rerender())
            .catch(error => console.error(error))
    }

    return(
        <div className='options__group__container'>
            <ul className='options__group__list'>
                <li>
                    <ModifyModal
                        handler={props.rerender}
                        buttonColor={'#51629D'}
                        buttonIcon={'fas fa-cogs'}
                        buttonTooltip="Modify application"
                        application={props.app}
                    />
                </li>
                <li>
                    <AcceptRejectModal
                        action={"mark as accepted"}
                        handler={handleMarkAccepted}
                        buttonColor={'#88E486'}
                        buttonIcon={'fa fa-thumbs-up'}
                        buttonTooltip="Mark as accepted"/>
                </li>
                <li>
                    <AcceptRejectModal
                        action={"delete this application"}
                        handler={handleDeleteApp}
                        buttonColor={'#E48C86'}
                        buttonIcon={'fas fa-trash'}
                        buttonTooltip="Delete application"
                    />
                </li>
            </ul>
        </div>
    )
}

export default OptionsGroup