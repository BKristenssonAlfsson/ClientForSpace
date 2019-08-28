import React from 'react'
import {Route, NavLink, Switch, BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
import ImageOfTheDay from '../imageoftheday/ImageOfTheDay';
import Home from '../home/Home';
import Gallery from '../gallery/Gallery';

export default function Header() {

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/imageoftheday">Image Of The Day</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/imageoftheday" component={ImageOfTheDay}/>
                    <Route exact path="/gallery" component={Gallery}/>
                </Switch>
            </div>
        </Router>
    )
}
