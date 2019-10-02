import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../../redux/actions/Actions';
import { useRoutes, A } from 'hookrouter';
import './Header.css';
import {routes } from './routes';

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const routeResult = useRoutes(routes);

    return (
        <div className="top">
            <div className="dashboard">
                <A href="/">Home</A>
                <A href="/user">User</A>
                <A href="/nasa">Nasa</A>
                <A href="/mars">Mars</A>       
                <A href="/todo">Todo</A>
                <A href="/geostorm">GeoStorms</A>
            </div>   
            {routeResult}
        </div>
    )
}

export default Header;
