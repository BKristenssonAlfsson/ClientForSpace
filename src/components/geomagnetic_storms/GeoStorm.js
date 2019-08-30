import React, { useState } from 'react'
import api from '../../shared/axios/api';
import Moment from 'react-moment';
import './geostorm.css';
import SearchBetweenDates from '../../hooks/SearchBetweenDates';

export default function GeoStorm() {

    const [data, setData] = useState({data: []});
    
    async function toAxios() {
        await api.getGeoStorms(dates.startDate, dates.stopDate).then((response) => {
            console.log(response)
            setData(response.data);
            })
    };


    const {dates, handleInputChange, handleSubmit} = SearchBetweenDates({startDate: '', stopDate: ''}, toAxios);

    return (
        <div>
            <div className="searchBox">
                <form onSubmit={handleSubmit}>
                    <label>
                        From:
                        <input className="date" type="date" name="startDate" min="2010-01-01" onChange={handleInputChange} value={dates.startDate} />
                    </label>
                    <p></p>
                    <label>
                        To:
                        <input className="date" type="date" name="stopDate" max="2020-01-01" onChange={handleInputChange} value={dates.stopDate}  />
                    </label>
                    <p></p>
                    <button className="submit" type="Submit">Look Up</button>
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
