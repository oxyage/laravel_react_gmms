import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavbarBrand from "../../images/brand.png";
import bootstrapSolid from "../../images/bootstrap-solid.svg";

class NavbarTop extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={bootstrapSolid} width="30" height="30"
                         className="d-inline-block align-top mx-2" alt="" />
                        Система группового управления
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Показать на карте</a>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                       Показать карту
                                    </label>

                                </div>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>

                    </ul>
                <span className="navbar-text">
                    {
                        this.props.Loading && <div>
                            <div className="spinner-border spinner-border-sm text-info mx-2" role="status"></div>
                            Загрузка ...
                        </div>
                    }
                </span>
                </div>
            </nav>
        );
    }
}

export default NavbarTop;
