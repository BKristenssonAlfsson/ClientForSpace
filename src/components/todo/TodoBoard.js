import React, { useState, useEffect } from 'react';
import './TodoBoard.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { useSelector } from 'react-redux';

export default function TodoBoard() {
    
    const [ data, setData ] = useState({data: []})

    const result = useSelector(state => state.TodoReducer);

    useEffect(() => {
        test()
    }, );

    async function test() {
        await setData(result.todos)
    }

      const columns = [{
        Header: 'Todo Title',
        accessor: 'label'
      },{
        Header: 'Description',
        accessor: 'description'
      },{
        Header: 'Status',
        accessor: 'done'
      }]

    return (
        <div className="todoContainer">
            {console.log(data)}
            { data.length > 0 ?
                <ReactTable 
                    data={data}
                    columns={columns}
                    className="todoTable"
                /> : "No data to show"
            }
        </div>
    )
}
