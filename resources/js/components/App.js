import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavbarTop from "./NavbarTop"
import Container from "./Container";
import NavbarFooter from "./NavbarFooter";

function App() {



    return (
        <div>
            <NavbarTop />
            <Container/>
            <NavbarFooter />
        </div>
    );
}

export default App;

 ReactDOM.render(<App />, document.getElementById('root'));

