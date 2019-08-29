import React, { useEffect, useState } from 'react'
import './imageoftheday.css';
import api from '../../shared/axios/api';

export default function ImageOfTheDay() {
    const [data, setData] = useState({data: []});
    const [status_code, setStatusCode] = useState({data: []});
    const [message, setMessage] = useState({data: String})

    useEffect(() => {
        api.getDailyImage().then((response) => {
            setData(response);
        })
    }, []);

    async function save(data) {

        await api.storeImage(data).then((response) => {
            console.log(response)
        })
        .catch((error) => {
            setStatusCode(error.response.status)
            setMessage("This image was already in the database. No dublicates allowed!");
        })
    }



    return (
        <div>
            <div className="card">
                <h1>Todays NASA image</h1>
                <hr />
                <h3>{data.title} - { data.date }</h3>
                <p></p>
                <img src={data.hdurl} />
                <hr />
                {data.explanation}
                <p></p>
                <h5>Copyright: {data.copyright}</h5>
                <hr />
                <button onClick={() =>save(data)}>Save</button>
                { status_code > 0 && <p>{status_code + " " + message}</p>}
            </div>
        </div>
    )
}
