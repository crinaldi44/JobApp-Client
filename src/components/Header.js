import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {Tooltip} from "@mui/material";

/**
 * The Header component is a banner that displays the name of the current screen as well as some toolbar options in the far
 * right corner.
 * @returns {JSX.Element}
 */
const Header = (props) => {
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
                    <li><i class="fas fa-moon"></i></li>
                </Tooltip>
                <Tooltip title={'Logout'}>
                    <li><i class="fa fa-arrow-left" aria-hidden="true"></i></li>
                </Tooltip>
                <li><span className='profile__icon'>CR</span></li>
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
