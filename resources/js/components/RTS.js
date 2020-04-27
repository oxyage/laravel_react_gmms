import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../css/rts.css";

function Rts(props){

    return (
        <div className="rts"
             style={{top: (100 - props.rts.coord_y) + '%', left: props.rts.coord_x + "%"}}
        >
            <div className='tower'></div>

            <div className='name'> {props.rts.name} </div>
        </div>
    );

}

export default Rts;
