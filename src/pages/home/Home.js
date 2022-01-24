import React from 'react'
import Header from '../../components/Header'
import './Home.css'

/**
 * Represents the component displayed when launching the application.
 * @returns {JSX.Element}
 */
const Home = () => {
    return (
        <div className='home__container'>
            <Header title="Dashboard"/>
        </div>
    )
}

/**
 * Represents the component displayed when launching the application.
 * @returns {JSX.Element}
 */
export default Home
