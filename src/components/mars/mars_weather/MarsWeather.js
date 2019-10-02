import React, { useEffect, useState } from 'react'
import api from '../../../shared/axios/api';

export default function MarsWeather() {
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
