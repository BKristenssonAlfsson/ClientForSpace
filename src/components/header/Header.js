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
        <div className="top">
            <div className="dashboard">
                <A href="/">Home</A>
                <A href="/user">User</A>
                <A href="/nasa">Nasa</A>
                <A href="/todo">Add Todo</A>
                <A href="/todoboard">All Todos</A>
                <A href="/geostorm">GeoStorms</A>
                <A href="/marsweather">Mars Weather</A>       
            </div>   
            {routeResult}
        </div>
    )
}
//<TodoOverview />
export default Header;
