import React from 'react';
import ImageOfTheDay from '../imageoftheday/ImageOfTheDay';
import Gallery from './gallery/Gallery';

export const nasaroutes = {
    "/imageoftheday": () => <ImageOfTheDay />,
    "/gallery": () => <Gallery />
}