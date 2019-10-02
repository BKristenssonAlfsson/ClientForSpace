import React from 'react';
import Home from '../home/Home';
import MarsWeather from '../mars_weather/Mars_Weather';
import GeoStorm from '../geomagnetic_storms/GeoStorm';
import Todo from '../todo/Todo';
import TodoBoard from '../todo/TodoBoard';
import Nasa from '../nasa/Nasa';
import User from '../user/User';

export const routes = {
    "/": () => <Home />,
    "/user*": () => <User />,
    "/nasa*": () => <Nasa />,
    "/marsweather": () => <MarsWeather />,
    "/geostorm": () => <GeoStorm />,
    "/todoboard": () => <TodoBoard />,
    "/todo": () => <Todo />
}