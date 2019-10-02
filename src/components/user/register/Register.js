import React from 'react';
import './Register.css';
import useFormValidation from '../../../hooks/FormDataHook';
import api from '../../../shared/axios/api';

export default function Register() {

    const INITIAL_STATE= ({ 
        username: '', 
        password: ''
    })

    const { handleChange, values, handleSubmit, resetForm } = useFormValidation(INITIAL_STATE);
    
    function storeInDatabase(data) {
        resetForm();
        api.addUser(data);

    }
    return (
        <div>
                        <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" 
                       name="username"
                       onChange={handleChange}
                       value={values.username} />
                
                <p></p>
                <label>Password</label>
                
                <input type="password" 
                       name="password"
                       onChange={handleChange}
                       value={values.password}/>
                <p></p>
                <button className="saveToDatabaseButton" type="button" onClick={() => storeInDatabase(values)}>Save</button>
                </form>
        </div>
    )
}
