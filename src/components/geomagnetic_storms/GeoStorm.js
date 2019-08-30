import React, { useEffect, useState } from 'react'
import api from '../../shared/axios/api';
import Moment from 'react-moment';
import './geostorm.css';

export default function GeoStorm() {

    const [data, setData] = useState({data: []});
    
    const searchBetweenDates = (callback) => {
        const [dates, setDates] = useState({});

        const handleSubmit = (event) => {
            if(event) {
                event.preventDefault();
            }
        }
        
        const handleInputChange = (event) => {
            event.persist();
            setDates(date => ({...date, [event.target.name]: event.target.value}));
        }
        
        return {
            handleSubmit,
            handleInputChange,
            inputs
        };
    }

    useEffect(() => {
        api.getGeoStorms().then((response) => {
            setData(response);
        })
    }, []);

    function save(event) {
        this.setState({value: event.target.value});
      }
    

    return (
        <div>
            <div className="searchBox">
                <form>
                    <label>
                        From:
                        <input className="date" type="date" />
                    </label>
                    <p></p>
                    <label>
                        To:
                        <input className="date" type="date" />
                    </label>
                    <p></p>
                    <button className="submit" type="Submit" onClick={() =>save(data)}>Look Up</button>
                </form>
            </div>
            <div className="response">
            {data.length > 0 ? 
                data.map(d => (
                    <p key={d.gstID}><Moment format="YYYY/MM/DD HH:mm">{d.startTime}</Moment>
                </p>))    
                : <span>No Data</span>}
            </div>
        </div>
    )
}
