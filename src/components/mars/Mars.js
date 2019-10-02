import React from 'react';
import { useRoutes, A } from 'hookrouter';
import { marsroutes } from './marsroutes'; 

export default function Mars() {

    const routeResult = useRoutes(marsroutes);

    return (
        <div>
            <div>
                <A href="/mars/marsweather">Mars Weather</A>
            </div>    
            {routeResult}    
        </div>
    )
}
