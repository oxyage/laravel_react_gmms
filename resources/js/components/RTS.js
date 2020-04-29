import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../css/rts.css";

class Rts extends Component{

    constructor(){
        super();

        this.state = {

        };

    }
    render() {
        return (
            <div className="rts"
                 style={{top: (100 - this.props.rts.coord_y) + '%', left: this.props.rts.coord_x + "%"}}
            >


                <div className="tower" onClick={this.props.dispatcher}>

                </div>

                <div className='name'>
                    {this.props.rts.name}

                </div>
            </div>
        );
    }
}

export default Rts;
