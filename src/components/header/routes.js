import React from 'react';
import ImageOfTheDay from '../imageoftheday/ImageOfTheDay';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';
import MarsWeather from '../mars_weather/Mars_Weather';
import GeoStorm from '../geomagnetic_storms/GeoStorm';
import Todo from '../todo/Todo';
import TodoBoard from '../todo/TodoBoard';
import Login from '../login/Login';

export const routes = {
    "/": () => <Home />,
    "/imageoftheday": () => <ImageOfTheDay />,
    "/gallery": () => <Gallery />,
    "/marsweather": () => <MarsWeather />,
    "/geostorm": () => <GeoStorm />,
    "/todoboard": () => <TodoBoard />,
    "/todo": () => <Todo />,
    "/login": () => <Login />,
}