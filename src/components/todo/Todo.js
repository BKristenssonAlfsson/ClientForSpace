import React, { useEffect, useState } from 'react';
import './Todo.css';
import Select from 'react-select';
import useFormValidation from '../../hooks/FormDataHook';
import api from '../../shared/axios/api';

export default function Todo() {

    const [storage, setStorage] = useState({data: []});

    const INITIAL_STATE= ({ 
        label: '', 
        description: ''
    })

    useEffect(() => {
        setStorage(JSON.parse(localStorage.getItem('storedTodos')))
    }, [])

    const { handleChange, values, handleSubmit, resetForm } = useFormValidation(INITIAL_STATE);

    function saveToLocaleStorage(data) {

        if (localStorage.getItem('storedTodos') === null ) {
            let temp = [];
            data["value"] = 1;
            temp.push(data);
            localStorage.setItem('storedTodos', JSON.stringify(temp))
        } else {
            let temp = (JSON.parse(localStorage.getItem('storedTodos')));
            let value = temp.map(el => el.value);
            value++;
            data["value"] = value;
            temp.push(data);
            localStorage.setItem('storedTodos', JSON.stringify(temp));
            console.log(JSON.parse(localStorage.getItem('storedTodos')));
            //Remove when this todo list is working"
            //localStorage.clear();
        }
    }

    function storeInDatabase(data) {
        resetForm();
        api.addTodo(data);
    }

    return (
        <div className="todoForm">
            <h1 className="todoHeader">Add a new Todo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="todoLabel" htmlFor="todo">Todos in Localstorage</label>
                    { localStorage.getItem('storedTodos') === null ? 
                    <Select className="todoSelect" isDisabled /> :
                    <Select className="todoSelect" options={ storage }/> }
                </div>
                <p></p>
                <div>
                    <label className="todoLabel" htmlFor="label">Todo name</label>
                    <input type="text" 
                           name="label"
                           defaultValue={values.label} 
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
                              defaultValue={values.description} 
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
