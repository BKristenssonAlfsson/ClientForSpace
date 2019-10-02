import React from 'react';
import GalleryCard from './GalleryCard';
import { useSelector } from 'react-redux';
import './Gallery.css';

export default function Gallery() {

    const result = useSelector(state => state);

    return (
        <div className="galleryContainer">
            <GalleryCard data={result.NasaReducer.images} />
        </div>
    )
}
