import './style/reset.css';

import React, {Component} from "react";
import {render} from "react-dom";

import $ from 'jquery';
import log from './lib/lib.js';
import Header from './components/Header/Header.js';
import RefStringHtml from './components/Ref/RefStringHtml.jsx';
import LifeCycle from './components/LifeCycle';


// ref demo
class App extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2,
            show: true
        };
    }
    render(){
        return (
            <div>
                <Header ref="headerref" />
                <RefStringHtml />

                <div>
                    {this.state.show ? <LifeCycle a={this.state.a} b={this.state.b} /> : false}
                    <button onClick={() => {
                        this.setState({
                            a: 3,
                            b: 4
                        });
                    }}>change props</button>
                    <button onClick={() => {
                        this.setState({
                            show: false
                        });
                    }}>unmount</button>
                </div>
            </div>

        );
    }

    componentDidMount() {
        console.log(this.refs);

    }
}


render(<App />, document.getElementById("app"));