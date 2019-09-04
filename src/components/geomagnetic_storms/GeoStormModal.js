import React from 'react';
import Moment from 'react-moment';
import './geostormmodal.css';
import { XYPlot, 
         YAxis, 
         XAxis, 
         VerticalGridLines, 
         HorizontalGridLines, 
         VerticalBarSeries
    } from 'react-vis';

const GeoStormModal = props => {

    let k = 0;
    const kpIndexData = [];
    const BarSeries = VerticalBarSeries;

    return (
        <div>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3><Moment format="YYYY/MM/DD HH:mm">{props.datas.startTime}</Moment></h3>
                </div>
                <div className="modal-body">
                    <div className="eventID">
                        ID: {props.datas.gstID}
                    </div>
                    <div className="modalrow">
                        <div className="kpIndexes">
                        
                            <ul>
                                {props.datas.allKpIndex.map(index => {
                                    k++;
                                    kpIndexData.push({x : k, y: index.kpIndex} )
                                    return <li key={k} className="observationLists">Observed Time: 
                                                <Moment format="YYYY/MM/DD HH:mm">{index.observedTime}</Moment>
                                                <ul key={k}>
                                                    <li  className="observationLists"> 
                                                        KP Index: {index.kpIndex} 
                                                    </li>
                                                    <li  className="observationLists">
                                                        Source: {index.source}
                                                    </li>
                                                </ul>
                                            </li>
                                        }
                                    )
                                }
                            </ul>
                        </div>
                        <div className="linkedEvents"> 
                            {props.datas.linkedEvents === null || props.datas.linkedEvents.length === 0 ? 
                                <h3>No Linked events</h3> : 
                                    <div>
                                        <h3>Linked Events</h3>
                                        <p>{props.datas.linkedEvents[0].activityID}</p>
                                    </div>}
                        </div>
                    </div>
                    <div className="kpIndexChart">
                        <h3>KP Index</h3>
                        <XYPlot xType="ordinal" width={500} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <BarSeries data={kpIndexData} barWidth={0.5}/>
                        </XYPlot>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}


export default GeoStormModal;