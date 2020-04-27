import React, {Component} from 'react';
import axios from 'axios'

class RtsList extends Component {

    constructor()
    {
        super();
        this.state = {
            list: []
        };

    }




    render() {

        return (
            <div>

            </div>
        );
    }
}

export default RtsList;
/*
* {
                                RTS_List.map(item => {
                                    return <div className="rts"
                                                style={{top: (100 - item.coord_y) + '%', left: item.coord_x + "%"}}>
                                        <div className='tower'></div>

                                        <div className='name'> {item.name} </div>
                                    </div>
                                })
                            }
* */
