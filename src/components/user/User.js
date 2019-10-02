import React from 'react';
import { useRoutes, A } from 'hookrouter';
import { userroutes } from './userroutes'; 
import './User.css';

export default function User() {

    const routesResult = useRoutes(userroutes);

    return (
        <div className="userbody">
            <div className="submenuuser">
                <A href="/user/login">Login</A> 
                <A href="/user/register">Register</A>     
            </div>
            {routesResult}
        </div>
    )
}
