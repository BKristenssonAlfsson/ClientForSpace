import React, { useEffect, useState } from 'react'
import api from '../../shared/axios/api';
import Moment from 'react-moment';

export default function GeoStorm() {

    const [data, setData] = useState({data: []});

    useEffect(() => {
        api.getGeoStorms().then((response) => {
            setData(response);
        })
    }, []);

    return (
        <div>
            {Object.keys(data).map((item, i) => (
                <span key={i}>key: {i}  Name: {data[i]}</span>
            ))}
        </div>
    )
}
