import React, { useEffect, useState } from 'react'
import './imageoftheday.css';
import api from '../../shared/axios/api';

export default function ImageOfTheDay() {
    const [data, setData] = useState({data: []});

    useEffect(() => {
        api.getDailyImage().then((response) => {
            setData(response);
        })
    }, []);

    function save(data) {
        const d = api.storeImage(data);
        console.log(d);
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
            </div>
        </div>
    )
}
