import React from 'react';
import Home from '../home/Home';
import Mars from '../mars/Mars';
import GeoStorm from '../geomagnetic_storms/GeoStorm';
import Todo from '../todo/Todo';
import Nasa from '../nasa/Nasa';
import User from '../user/User';

export const routes = {
    "/": () => <Home />,
    "/user*": () => <User />,
    "/nasa*": () => <Nasa />,
    "/mars*": () => <Mars />,
    "/todo*": () => <Todo />,
    "/geostorm": () => <GeoStorm />
}