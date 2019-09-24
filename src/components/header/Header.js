import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../../redux/actions/Actions';
import { useRoutes, A } from 'hookrouter';
import './Header.css';
import {routes } from './routes';
import TodoOverview from '../todo/TodoOverview';

const Header = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const routeResult = useRoutes(routes);

    return (
        <div>
        <div className="headerMenu">
            <A href="/">Home</A>
            <A href="/imageoftheday">Image Of The Day</A>
            <A href="/login">Login</A>
            <A href="/gallery">Gallery</A>
            <A href="/todo">Add Todo</A>
            <A href="/todoboard">All Todos</A>
            <A href="/geostorm">GeoStorms</A>
            <A href="/marsweather">Mars Weather</A>
            <TodoOverview />
            {routeResult}
        </div>
        </div>
    )
}

export default Header;
