import React, { useState } from 'react';
import api from '../../shared/axios/api';
import Moment from 'react-moment';
import './geostorm.css';
import SearchBetweenDates from '../../hooks/SearchBetweenDates';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Pagination from '../../shared/pagination/Pagination';
import GeoStormModal from './GeoStormModal';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function GeoStorm() {

    const [data, setData] = useState({ data: [] });
    const [datas, setDatas] = useState({ datas: [] });
    const [open, setOpen] = useState({ open: false });
    const [content, setContent] = useState({ content: true });

    const onRowClick = (state, rowInfo, column, instance) => {
        return {
            onClick: (e, handleOriginal) => {
                setDatas(rowInfo.original);
                setOpen(true);
                setContent(false);
            }
        }
    }

    const columns = [
        {
            Header: 'Year',
            accessor: 'startTime',
            Cell: (data) => {
                const custom_date = data.original.startTime
                return <Moment format="YYYY">{custom_date}</Moment>
            },
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            width: 100,
            className: "year"
        },
        {
            Header: 'Month',
            accessor: 'startTime',
            Cell: (data) => {
                const custom_date = data.original.startTime
                return <Moment format="MM">{custom_date}</Moment>
            },
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            width: 100,
            className: "month"
        },
        {
            Header: 'Day',
            accessor: 'startTime',
            Cell: (data) => {
                const custom_date = data.original.startTime
                return <Moment format="DD">{custom_date}</Moment>
            },
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            width: 100,
            className: "day"
        },
        {
            Header: 'Time',
            accessor: 'startTime',
            Cell: (data) => {
                const custom_date = data.original.startTime
                return <Moment format="HH:mm">{custom_date}</Moment>
            },
            headerStyle: { whiteSpace: 'unset' },
            style: { whiteSpace: 'unset' },
            width: 100,
            className: "hour"
        },
    ]

    async function toAxios() {
        await api.getGeoStorms(dates.startDate, dates.stopDate).then((response) => {
            setData(response.data);
        })
    };

    function closeGeoStormModal() {
        setOpen(false);
        setContent(true);
    }

    const { dates, handleInputChange, handleSubmit } = SearchBetweenDates({ startDate: '', stopDate: '' }, toAxios);

    return (
        <div>
            {content !== false ?
                <div className="searchBox">
                    <form onSubmit={handleSubmit}>
                        <label>
                            From:
                        <input className="date" type="date" name="startDate" min="2010-01-01" onChange={handleInputChange} value={dates.startDate} />
                        </label>
                        <p></p>
                        <label>
                            To:
                        <input className="date" type="date" name="stopDate" max="2020-12-31" onChange={handleInputChange} value={dates.stopDate} />
                        </label>
                        <p></p>
                        <button className="lookup" type="Submit">Look Up</button>
                    </form>
                </div>
                : ''}
            {content !== false ?
                <div className="response">
                    {data.length > 0 ?
                        <ReactTable
                            PaginationComponent={Pagination}
                            data={data}
                            getTdProps={onRowClick}
                            columns={columns}
                            max={25}
                            defaultExpanded={{ 2: true }}
                            defaultPageSize={10}
                            className="-striped -highlight" />
                        : 'No data to show'}
                </div>
                : ''}
            {open === true ?
                <TransitionGroup>
                    <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
                        <GeoStormModal datas={datas} close={closeGeoStormModal} />
                    </CSSTransition>
                </TransitionGroup>
                : ''}
        </div>
    )
}