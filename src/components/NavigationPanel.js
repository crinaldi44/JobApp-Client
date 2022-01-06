import React from 'react'
import './NavigationPanel.css'
import { Link, useLocation } from 'react-router-dom'

/**
 * Represents a navigation panel.
 * @returns {JSX.Element}
 */
const NavigationPanel = () => {

    const loc = useLocation()

    return (
        <div className='navigation__container'>
            <div className='branding'>
                <i class="fas fa-paper-plane"></i>
                <div className='branding__logo'>
                    <h3>JobApp</h3>
                    <p>For professionals.</p>
                </div>
            </div>
            <ul className="nav__menu">
                <Link to="/"><li className={loc.pathname === '/' ? 'nav__item active' : 'nav__item'}>Dashboard</li></Link>
                <Link to="/applications"><li className={loc.pathname === '/applications' ? 'nav__item active' : 'nav__item'}>Job Applications</li></Link>
                <Link to="/settings"><li className={loc.pathname === '/settings' ? 'nav__item active' : 'nav__item'}>Settings</li></Link>
            </ul>
        </div>
    )
}

export default NavigationPanel
