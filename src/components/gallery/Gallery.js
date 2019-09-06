import React from 'react';
import GalleryCard from './GalleryCard';
import { useSelector } from 'react-redux'

export default function Gallery() {

    const result = useSelector(state => state);

    return (
        <div>
            <GalleryCard data={result.NasaReducer.images} />
        </div>
    )
}
