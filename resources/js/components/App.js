import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import NavbarTop from "./NavbarTop"
import Container from "./Container";
import NavbarFooter from "./NavbarFooter";

class App extends Component {

    constructor()
    {
        super();
        this.state = {
            loading: true,
            RTSList: []
        };

    }

    componentDidMount() {


            axios.get('/api/rts')
                .then(response =>{
                    this.setState({
                        RTSList: response.data,
                        loading: false
                    })

                })
                .catch(error => {
                    console.error('Error loading',error);
                });

    }

    render() {
        return (
            <div>
                <NavbarTop Loading={this.state.loading}/>
                <Container RTSList = {this.state.RTSList} />
                <NavbarFooter/>
            </div>
        );
    }
}

export default App;


 ReactDOM.render(<App />, document.getElementById('root'));

