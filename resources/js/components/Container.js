import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../css/rts.css";
import BackgroundMap from "../../images/maps.png";
import NavbarRight from "./NavbarRight";
import RtsList from "./RTSList";
import Rts from "./RTS";


class Container extends Component {

    constructor(props)
    {
        super(props);
        this.state = {

        };
    }

    render() {


        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-9" >
                        <div style={{
                            position: 'relative',
                            background: `url(${BackgroundMap})`,
                            height: "1000px",
                            width: "1126px"
                        }}>
                            {
                                this.props.RTSList.map(rts =>{
                                    return <Rts rts={rts} key={rts.id}/>
                                })

                            }
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <NavbarRight />
                    </div>
                </div>



            </div>
        );
    }
}

export default Container;
