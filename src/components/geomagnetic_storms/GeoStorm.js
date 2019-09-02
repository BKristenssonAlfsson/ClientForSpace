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

    function splitData(data) {
        console.log(data)
        var size = 20;
        var arrayOfArrays = [];
        for ( var i = 0; i < data.length; i+=size ) {
            arrayOfArrays.push(data.slice(i, i+size));
        }
        console.log(arrayOfArrays);
    }


    const {dates, handleInputChange, handleSubmit} = SearchBetweenDates({startDate: '', stopDate: ''}, toAxios);

    return (
        
        <div>
        {splitData(data)}
            <div className="searchBox">
                <form onSubmit={handleSubmit}>
                    <label>
                        From:
                        <input className="date" type="date" name="startDate" min="2010-01-01" onChange={handleInputChange} value={dates.startDate} />
                    </label>
                    <p></p>
                    <label>
                        To:
                        <input className="date" type="date" name="stopDate" max="2020-12-31" onChange={handleInputChange} value={dates.stopDate}  />
                    </label>
                    <p></p>
                    <button className="submit" type="Submit">Look Up</button>
                </form>
            </div>
            <div className="response">
                <table cellSpacing="10">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? 
                            data.map(d => (
                                <tr key={d.gstID}>
                                    <td key={d.gstID}>
                                        <Moment format="YYYY">{d.startTime}</Moment>
                                    </td>
                                    <td align="center" key={d.gstId}>
                                        <Moment format="MM">{d.startTime}</Moment>
                                    </td>
                                    <td align="center" key={d.gstId}>
                                        <Moment format="DD">{d.startTime}</Moment>
                                    </td>
                                    <td key={d.gstId}>
                                        <Moment format="HH:mm">{d.startTime}</Moment>
                                    </td>
                                </tr>
                            ))   
                        : <tr><td></td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}