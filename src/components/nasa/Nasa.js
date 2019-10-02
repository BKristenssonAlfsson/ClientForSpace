import React from 'react'
import './Nasa.css';
import { useRoutes, A } from 'hookrouter';
import { nasaroutes } from './nasaroutes'; 

export default function Nasa() {

    const routeResult = useRoutes(nasaroutes);

    return (
        <div className="nasabody">
            <div className="submenu">
                <A href="/nasa/imageoftheday">Image of the day</A>
                <A href="/nasa/gallery">Gallery</A>
            </div>
            {routeResult}
        </div>

    )
}
