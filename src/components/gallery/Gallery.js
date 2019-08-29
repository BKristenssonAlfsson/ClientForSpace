import React, { useEffect, useState } from 'react';
import api from '../../shared/axios/api';

export default function Gallery() {
    const [data, setData] = useState({data: []});

    useEffect(() => {
        api.getAllImages().then((response) => {
            setData(response[0]);
            console.log(response);
        })
    }, []);
    return (
        <div>
            {data.explanation}
        </div>
    )
}
