import React, { useEffect, useState } from 'react'
import api from '../../shared/axios/api';

export default function Mars_Weather() {
    const [data, setData] = useState({data: []});

    useEffect(() => {
        api.getMarsWeather().then((response) => {
            setData(response);
        })
    }, []);
    
    return (
        <div>
            {console.log(data)}
        </div>
    )
}
