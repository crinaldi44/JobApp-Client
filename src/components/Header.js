import React, {useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {Tooltip, Snackbar, Alert} from "@mui/material";
import InfoSnackbar from './InfoSnackbar';

/**
 * The Header component is a banner that displays the name of the current screen as well as some toolbar options in the far
 * right corner.
 * @returns {JSX.Element}
 */
const Header = (props) => {

    /**
     * Represents whether the alert trigger is open. Intended
     * for temporary use.
     */
    const [alertOpen, setalertOpen] = useState(false);

    /**
     * Handles action taken when the button is clicked.
     */
    const openAlert = () => {
        setalertOpen(true)
    }

    /**
     * Handles the action taken when the snackbar closes.
     * @param {*} event 
     * @param {*} reason 
     */
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') return;

        setalertOpen(false);
    }

    return (
        <div className='header__container'>
            <div className='header__title__section'>
                <Tooltip title={'Toggle navigation panel'}>
                    <i className='fa fa-bars'></i>
                </Tooltip>
                <h1>{props.title}</h1>
            </div>
            <ul className='header__toolbar'>
                <Tooltip title={'Search for application'}>
                    <Link to="/applications"><li><i class="fas fa-search"></i></li></Link>
                </Tooltip>
                <Tooltip title={'Toggle dark mode'}>
                    <li><i onClick={openAlert} class="fas fa-moon"></i></li>
                </Tooltip>
                <Tooltip title={'Logout'}>
                    <li><i onClick={openAlert} class="fa fa-arrow-left" aria-hidden="true"></i></li>
                </Tooltip>
                <li><span className='profile__icon'>CR</span></li>

                <InfoSnackbar 
                    open={alertOpen}
                    info="This feature is currently unavailable!"
                    closeHandler={handleCloseAlert}/>
            </ul>
        </div>
    )
}

/**
 * The Header component is a banner that displays the name of the current screen as well as some toolbar options in the far
 * right corner.
 * @returns {JSX.Element}
 */
export default Header
