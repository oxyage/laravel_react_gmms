import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../css/rts.css";
import BackgroundMap from "../../images/maps.png";
import NavbarRight from "./NavbarRight";

class Container extends Component {



    render() {
        const RTS_List = [
            {
                name: "Брянск",
                coord_x: 74,
                coord_y: 62
            },
            {
                name: "Клетня",
                coord_x: 47,
                coord_y: 67
            },
            {
                name: "Новозыбков",
                coord_x: 18,
                coord_y: 30
            }
        ];

        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-8" >
                        <div style={{
                            position: 'relative',
                            background: `url(${BackgroundMap})`,
                            height: "1000px",
                            width: "1126px"
                        }}>
                            {
                                RTS_List.map(item => {
                                    return <div className="rts"
                                                style={{top: (100 - item.coord_y) + '%', left: item.coord_x + "%"}}>
                                        <div className='tower'></div>

                                        <div className='name'> {item.name} </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <NavbarRight />
                    </div>
                </div>



            </div>
        );
    }
}

export default Container;
