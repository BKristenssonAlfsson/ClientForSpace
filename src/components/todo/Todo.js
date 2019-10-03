import React from 'react';
import { useRoutes, A } from 'hookrouter';
import { todoroutes } from './todoroutes';
import './Todo.css';


export default function Todo() {

    const routeResult = useRoutes(todoroutes);

    return (
        <div className="todobody">
            <div className="tododashboard">
                <A href="/todo/addtodo">Add Todo</A>
                <A href="/todo/todoboard">Todo Board</A>
            </div>
            {routeResult}
        </div>

    )
}
