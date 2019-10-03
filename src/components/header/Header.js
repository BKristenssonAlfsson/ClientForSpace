import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../../redux/actions/Actions';
import { useRoutes, A } from 'hookrouter';
import './Header.css';
import {routes } from './routes';
import Person from '@material-ui/icons/Person';

const Header = () => {
    const dispatch = useDispatch();
    const loginDetails = useSelector(state => state.TokenReducer)

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const routeResult = useRoutes(routes);

    return (
        <div className="top">
            <div className="infoRow">
                <div className="todoNews">
                    News about what? <br /> 
                    Space launches?
                </div>
                <div className="titlearea">
                    SPACE CONTROLLER
                </div>
                <div className="news">
                    <Person /><span>{loginDetails.username["username"]}</span>
                </div>
            </div>
            <div className="break"></div>
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