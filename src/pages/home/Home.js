import React from 'react'
import Header from '../../components/Header'
import './Home.css'

/**
 * Represents the component displayed when launching the application.
 * @returns {JSX.Element}
 */
const Home = (props) => {
    return (
        <div className='home__container'>
            <Header title="Dashboard" navToggle={props.navToggle}/>
        </div>
    )
}

/**
 * Represents the component displayed when launching the application.
 * @returns {JSX.Element}
 */
export default Home
