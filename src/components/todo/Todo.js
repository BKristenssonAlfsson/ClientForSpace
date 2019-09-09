import React, { useState } from 'react'
import './Todo.css';
import MaterialIcon from 'material-icons-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux'

export default function Todo() {

    const result = useSelector(state => state);
    const [open, setOpen] = useState(false);

    function openClose()  {
        setOpen(!open);
    }

    return (
        <div className="page">
            { !open ? (
                <div className="pageButtonRow">
                    <button className="openCloseButton" 
                            onClick={() =>openClose()}>
                                <MaterialIcon icon="keyboard_arrow_down" />
                    </button>
                </div>
            ):(
                <TransitionGroup>
                    <CSSTransition in={true} appear={true} timeout={6600} classNames="todos">
                        <div>
                            <div className="pageButtonRow">
                                <button className="openCloseButton" 
                                        onClick={() =>openClose()}>
                                            <MaterialIcon icon="keyboard_arrow_up" />
                                </button>
                            </div>
                            <h1 className="todoTitle">Todo</h1>
                            <hr />
                            <ul className="todoList">
                                {result.TodoReducer.todos.map(todo => <li key={todo.id}>{todo.todo}</li>)}
                            </ul>
                        </div>
                    </CSSTransition>
                </TransitionGroup> 
            )}
        </div>
    )
}
