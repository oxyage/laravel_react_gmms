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

    changeLoadingState(newState){
        this.setState({
            loading: newState
        })
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

    myFunc()
    {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {



        return (
            <div>
                <NavbarTop Loading={this.state.loading}/>

                <Container RTSList = {this.state.RTSList} Loading={this.state.loading} dispatcher={this.myFunc.bind(this)} />
                <NavbarFooter Loading={this.state.loading}/>
            </div>
        );
    }
}

export default App;


 ReactDOM.render(<App />, document.getElementById('root'));

