import React from 'react'
import {Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
import ImageOfTheDay from '../imageoftheday/ImageOfTheDay';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';
import MarsWeather from '../mars_weather/Mars_Weather';
import GeoStorm from '../geomagnetic_storms/GeoStorm';

export default function Header() {

    return (
        <Router>
            <div>
                <ul className="headerUl">
                    <li className="menuLink">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="menuLink">
                        <NavLink to="/imageoftheday">Image Of The Day</NavLink>
                    </li>
                    <li className="menuLink">
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="menuLink">
                        <NavLink to="/marsweather">Mars Weather</NavLink>
                    </li>
                    <li className="menuLink">
                        <NavLink to="/geostorm">GST</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/imageoftheday" component={ImageOfTheDay}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/marsweather" component={MarsWeather}/>
                    <Route exact path="/geostorm" component={GeoStorm}/>
                </Switch>
            </div>
        </Router>
    )
}
