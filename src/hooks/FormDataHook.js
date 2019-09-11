import { useState } from 'react';

const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
    }

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    const resetForm = () => {
        setValues(initialState)
    }

    return { 
        handleChange, 
        values, 
        handleSubmit,
        resetForm 
    }
}

export default useFormValidation;