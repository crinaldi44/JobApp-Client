import React, {useState} from "react";

/**
 * The Dashboard component displays an overview of data to the user
 * @constructor
 */
export const Dashboard = () => {

    const [numApplications, setNumAplications] = useState(null)

    const getData = async () => {

        await Promise.all(
            [axios.get(`http://localhost:3000/api/applications?status=%22PENDING%22`),
                axios.get('http://localhost:3000/api/applications?status=%22ACCEPTED%22')].then(result => {
                    setNumAplications(result.data)
                }
            )
        )

    }

}