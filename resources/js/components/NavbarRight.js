import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class NavbarRight extends Component {

    constructor()
    {

        super();
        this.state = {

        }
    }

    render() {


        return (
            <ul className="nav flex-column mt-1">
                <li className="nav-item">
                    <button className="btn btn-info" type="button">
                       GMMS

                        {this.props.Loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }
                    </button>

                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        );
    }
}

export default NavbarRight;
