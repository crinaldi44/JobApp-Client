import React from 'react'
import Header from '../../components/Header'

/**
 * Represents the settings UI display.
 * @returns {JSX.Element}
 */
const Settings = (props) => {
    return (
        <div>
            <Header title='Settings' navToggle={props.navToggle}/>
        </div>
    )
}

/**
 * Represents a 
 * @returns {JSX.Element}
 */
export default Settings
