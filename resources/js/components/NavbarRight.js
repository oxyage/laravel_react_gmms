import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class NavbarRight extends Component {
    render() {
        return (
            <nav className="nav flex-column">
                <a className="nav-link active" href="#">Active</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
        );
    }
}

export default NavbarRight;
