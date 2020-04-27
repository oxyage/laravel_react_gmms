import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class NavbarTop extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar w/ text</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                <span className="navbar-text">
                    {
                        this.props.Loading && <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </span>
                </div>
            </nav>
        );
    }
}

export default NavbarTop;
