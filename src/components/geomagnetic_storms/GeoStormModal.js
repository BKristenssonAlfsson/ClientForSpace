import React from 'react';
import Moment from 'react-moment';
import './geostormmodal.css';


const GeoStormModal = props => {

    return (
        <div>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3><Moment format="YYYY/MM/DD HH:mm">{props.datas.startTime}</Moment></h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.datas.allKpIndex[0].kpIndex}
                    </p>
                    <p>
                        {props.datas.gstID}
                    </p>
                    <p>
                        {props.datas.linkedEvents[0].activityID}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}


export default GeoStormModal;