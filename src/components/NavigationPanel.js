import React from 'react'
import './NavigationPanel.css'
import { Link, useLocation } from 'react-router-dom'

/**
 * Represents a navigation panel.
 * @param props takes prop visible, represents whether it is visible
 * @returns {JSX.Element}
 */
const NavigationPanel = (props) => {

    /**
     * Represents the current pathname.
     */
    const loc = useLocation()

    /**
     * Stylesheet object that stores the state of the showNav
     * prop based on whether the user viewport is greater or
     * equal to 800px.
     */
    const visibility = {
        'false': {
            transform: props.showNav ? 'translateX(0)' : 'translateX(-70vw)'
        },
        'true': {
            display: props.showNav ? 'block' : 'none'
        }
    }

    /**
     * Toggles the navigation panel.
     */
    const toggleNavigationPanel = () => {

        if (window.innerWidth >= 800) {return}
        props.navToggle()
    }

    return (
        <div className='navigation__container' style={{...visibility[window.innerWidth >= 800]}}>
            <i id="close__btn" className='fas fa-close' onClick={toggleNavigationPanel}></i>
            <div className='branding'>
                <i class="fas fa-paper-plane"></i>
                <div className='branding__logo'>
                    <h3>JobApp</h3>
                    <p>For professionals.</p>
                </div>
            </div>
            <ul className="nav__menu">
                <Link onClick={toggleNavigationPanel} to="/"><li className={loc.pathname === '/' ? 'nav__item active' : 'nav__item'}>Dashboard</li></Link>
                <Link onClick={toggleNavigationPanel} to="/applications"><li className={loc.pathname === '/applications' ? 'nav__item active' : 'nav__item'}>Job Applications</li></Link>
                <Link onClick={toggleNavigationPanel} to="/settings"><li className={loc.pathname === '/settings' ? 'nav__item active' : 'nav__item'}>Settings</li></Link>
            </ul>
        </div>
    )
}

export default NavigationPanel
