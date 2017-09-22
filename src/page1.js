import './style/reset.css';

import React, {Component} from "react";
import {render} from "react-dom";

import $ from 'jquery';
import log from './lib/lib.js';
import Header from './components/Header/Header.js';
import RefStringHtml from './components/Ref/RefStringHtml.jsx';


// ref demo
class App extends Component {
    render(){
        return (
            <div>
                <Header ref="headerref" />
                <RefStringHtml />
            </div>

        );
    }

    componentDidMount() {
        console.log(this.refs);

    }
}


render(<App />, document.getElementById("app"));