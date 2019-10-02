import React from 'react';
import './Login.css';
import useFormValidation from '../../../hooks/FormDataHook';
import {retrieveCsrfToken} from '../../../redux/actions/Actions'
import { useDispatch } from 'react-redux';

export default function Login() {

    const dispatch = useDispatch();
    
    const INITIAL_STATE= ({ 
        username: '', 
        password: ''
    })

    const { handleChange, values, handleSubmit } = useFormValidation(INITIAL_STATE);


    function login(values) {
        dispatch(retrieveCsrfToken(values));
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
                <button className="saveToDatabaseButton" type="button" onClick={() => login(values)}>Login</button>
            </form>
        </div>
    )
}
