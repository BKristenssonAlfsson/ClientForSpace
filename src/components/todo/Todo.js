import React, { useEffect, useState } from 'react';
import './Todo.css';
import Select from 'react-select';
import useFormValidation from '../../hooks/FormDataHook';
import api from '../../shared/axios/api';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../../redux/actions/Actions';

export default function Todo() {

    const dispatch = useDispatch();
    
    window.addEventListener('storage', onStorageEvent, false);

    const [storage, setStorage] = useState({data: []});

    const INITIAL_STATE= ({ 
        label: '', 
        description: ''
    })

    useEffect(() => {
        setStorage(JSON.parse(localStorage.getItem('storedTodos')))
    }, [])

    const { handleChange, values, handleSubmit, resetForm, loadForm } = useFormValidation(INITIAL_STATE);

    function saveToLocaleStorage(data) {

        if (localStorage.getItem('storedTodos') === null ) {
            let temp = [];
            temp.push(data);
            localStorage.setItem('storedTodos', JSON.stringify(temp))
        } else {
            let temp = (JSON.parse(localStorage.getItem('storedTodos')));
            
            temp.forEach(element => {
                if ( element.label === data.label ) {
                    var index = temp.indexOf(element);
                    temp.splice(index, 1);
                }
            });

            temp.push(data);
            localStorage.setItem('storedTodos', JSON.stringify(temp));
            //Remove when this todo list is working"
            //localStorage.clear();
        }
    }

    function storeInDatabase(data) {
        resetForm();
        api.addTodo(data).then(() => {
            dispatch(getAllTodos());
        });
    }

    function selectedTodo(dataFromStorage) {
        loadForm(dataFromStorage)
    }

    function onStorageEvent(storageEvent) {
        console.log(storageEvent);
        alert("Something happened inside storage")
    }

    return (
        <div className="todoForm">
            <h1 className="todoHeader">Add a new Todo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="todoLabel" htmlFor="todo">Todos in Localstorage</label>
                    { localStorage.getItem('storedTodos') === null ? 
                    <Select className="todoSelect" isDisabled /> :
                    <Select className="todoSelect" options={ storage } onChange={ selectedTodo }/> }
                </div>
                <p></p>
                <div>
                    <label className="todoLabel" htmlFor="label">Todo name</label>
                    <input type="text" 
                           name="label"
                           value={values.label} 
                           className="todoTitle" 
                           onChange={handleChange} />
                </div>
                <p></p>
                <div>
                    <label className="todoLabel" htmlFor="description">Todo description</label>
                    <textarea type="text" 
                              name="description" 
                              rows="20" 
                              cols="85"
                              value={values.description} 
                              className="todoTextarea"
                              onChange={handleChange}>
                    </textarea>
                </div>
                <p></p>
                <div className="todoButtonRow">
                    <button className="saveToLocaleStorageButton" type="Submit" onClick={() => saveToLocaleStorage(values)}>Store</button>
                    <button className="clearTodoButton" type="reset" onClick={() => resetForm()}>Clear</button>
                    <button className="saveToDatabaseButton" type="button" onClick={() => storeInDatabase(values)}>Save</button>
                </div>
            </form>
        </div>
    )
}
