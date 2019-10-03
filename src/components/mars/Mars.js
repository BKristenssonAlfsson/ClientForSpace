import React from 'react';
import { useRoutes, A } from 'hookrouter';
import { marsroutes } from './marsroutes'; 
import './Mars.css';

export default function Mars() {

    const routeResult = useRoutes(marsroutes);

    return (
        <div className="marsbody">
            <div className="marssubmenu">
                <A href="/mars/marsweather">Mars Weather</A>
            </div>    
            {routeResult}    
        </div>
    )
}
