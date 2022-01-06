import React from 'react'
import Header from '../../components/Header'
import ApplicationTable from './components/ApplicationTable'
import './JobApplicationScreen.css'

/**
 * Represents the Job Applications Screen.
 * @returns 
 */
const JobApplicationScreen = () => {
    return (
        <div className='job__app__container'>
            <Header title="Job Applications"/>
            <ApplicationTable/>
        </div>
    )
}

/**
 * Represents the Job Applications Screen.
 * @returns 
 */
export default JobApplicationScreen
