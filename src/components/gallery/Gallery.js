import React, { useEffect, useState } from 'react';
import api from '../../shared/axios/api';
import GalleryCard from './GalleryCard';

export default function Gallery() {
    const [data, setData] = useState({data: []});

    useEffect(() => {
        api.getAllImages().then((response) => {
            setData(response);
        })
    }, []);


    return (
        <div>
            <GalleryCard data={data} />
        </div>
    )
}
