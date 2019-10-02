import React from 'react';
import AddTodo from './addtodo/AddTodo';
import TodoBoard from './todoboard/TodoBoard';

export const todoroutes = {
    "/addtodo": () => <AddTodo />,
    "/todoboard": () => <TodoBoard />
}