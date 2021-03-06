import React, {useEffect, useState} from 'react'
import axios from "axios";
import ApplicationTableCell from "./ApplicationTableCell";
import './ApplicationTable.css'
import {AddApplicationModal} from "./options/AddApplicationModal";
import LoadingBar from '../../../components/LoadingBar'

/**
 * The ApplicationTable is meant to retrieve and store data
 * @returns {JSX.Element}
 */
const ApplicationTable = () => {

    /**
     * Represents the applications as an array of JSON objects.
     */
    const [applications, setApplications] = useState(null)

    const [applicationsOrig, setApplicationsOrig] = useState([])

    /**
     * Represents whether the data has been loaded or not. If so,
     * we will display a "loading" component to compensate for
     * any latency between the server response time.
     */
    const [loaded, setLoaded] = useState(false)

    /**
     * Forces the component to re-render and retrieve the data. Waits 300ms before executing request for data
     * so as to allow for any latency between the server executing any patch requests.
     */
    const forceRerender = () => {
        setTimeout(() => {
            getData()
        }, 300)
    }

    /**
     * Retrieves the data from the server.
     */
    async function getData() {
        const response = await axios.get(process.env.REACT_APP_PRODUCTION_ADDRESS)
            .catch(error => {console.error(error)})
        const data = await response.data
        setApplications(data)
        setApplicationsOrig(data)
    }

    /**
     * Retrieve the data from the server.
     */
    useEffect(() => {
        getData()
    }, [])

    /**
     * Filters data using map.
     * @param data
     */
    const filterData = data => {
        setApplications(applicationsOrig.filter(s => s.business_name.toLowerCase().includes(data.toLowerCase())))
    }

    return (
        <div style={{flexGrow: 1, overflow: 'auto'}}>
            <div className='application__search__container'>
                <h2>Search application</h2>
                <div>
                <input
                    className='search__application__input'
                    placeholder='Enter the name of the application'
                    onChange={text => {filterData(text.target.value)}}/>
                    <AddApplicationModal
                        handler={forceRerender}
                        buttonColor={'#51629D'}
                        buttonIcon={'fas fa-plus'}
                    />
                </div>
            </div>
        <div className='app__table__container'>
            <table>
                <thead>
                <tr>
                    <th>Business name</th>
                    <th data-label="responsive">Description</th>
                    <th>Role type</th>
                    <th>Status</th>
                    <th data-label="responsive">Created date</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                {
                !applications ? (<LoadingBar/>) : applications.map(app => (
                    <ApplicationTableCell
                        application={app}
                        rerender={forceRerender}
                    />
                ))
                
                }
                </tbody>
            </table>
        </div>
            </div>
    )
}

/**
 * The ApplicationTable is meant to retrieve and store data
 * @returns {JSX.Element}
 */
export default ApplicationTable
