import React from 'react';
import './SpaceWeather.css';
import { useRoutes, A } from 'hookrouter';
import { spaceweatherroutes } from './spaceweatherroutes'; 


export default function SpaceWeather() {

    const routeResult = useRoutes(spaceweatherroutes);

    return (
        <div className="spaceweatherbody">
            <div className="spaceweatherdashboard">
                <A href="/spaceweather/geostorms">GeoStorms</A>
            </div>
            {routeResult}
        </div>
    )
}
