import {useState} from 'react';

const SearchBetweenDates = (initialValues, callback) => {
    const [dates, setDates] = useState(initialValues);

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
            callback();
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setDates(dates => ({...dates, [event.target.name]: event.target.value}));
    }
    
    return {
        handleSubmit,
        handleInputChange,
        dates
    };
}
export default SearchBetweenDates;