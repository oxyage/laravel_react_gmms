import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class NavbarFooter extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light mt-5" style={{height:"90px"}}>
                <a className="navbar-brand" href="">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {
                    this.props.Loading && <div>
                        <div className="spinner-border spinner-border-sm mx-2" role="status"></div>
                        Загрузка ...
                    </div>
                }
            </nav>
        );
    }
}

export default NavbarFooter;
