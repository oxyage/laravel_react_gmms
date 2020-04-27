import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class NavbarFooter extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mt-5">
                <a className="navbar-brand" href="">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item">Action</a>
                                <a className="dropdown-item">Another action</a>
                                <a className="dropdown-item">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">Separated link</a>
                                <a className="dropdown-item">One more separated link</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-class="fixed-left">
                                <i className="fa fa-arrow-left"></i>
                                Fixed Left
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-class="fixed-top">
                                <i className="fa fa-arrow-up"></i>
                                Fixed Top
                                <small>(original)</small>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link active" data-class="fixed-right">
                                <i className="fa fa-arrow-right"></i>
                                Fixed Right
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarFooter;
