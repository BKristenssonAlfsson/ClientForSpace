import React from 'react';
import Home from '../home/Home';
import Mars from '../mars/Mars';
import SpaceWeather from '../spaceweather/SpaceWeather';
import Todo from '../todo/Todo';
import Nasa from '../nasa/Nasa';
import User from '../user/User';

export const routes = {
    "/": () => <Home />,
    "/user*": () => <User />,
    "/nasa*": () => <Nasa />,
    "/mars*": () => <Mars />,
    "/todo*": () => <Todo />,
    "/spaceweather*": () => <SpaceWeather />
}