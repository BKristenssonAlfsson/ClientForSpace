import React from 'react';
import Home from '../home/Home';
import MarsWeather from '../mars_weather/Mars_Weather';
import GeoStorm from '../geomagnetic_storms/GeoStorm';
import Todo from '../todo/Todo';
import TodoBoard from '../todo/TodoBoard';
import Login from '../login/Login';
import Nasa from '../nasa/Nasa';

export const routes = {
    "/": () => <Home />,
    "/nasa*": () => <Nasa />,
    "/marsweather": () => <MarsWeather />,
    "/geostorm": () => <GeoStorm />,
    "/todoboard": () => <TodoBoard />,
    "/todo": () => <Todo />,
    "/login": () => <Login />,
}