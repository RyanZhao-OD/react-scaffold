import './style/reset.css';

import React from "react";
import {render} from "react-dom";

import $ from 'jquery';
import log from './lib/lib.js';
import Header from './components/Header/Header.js';


function component () {
    log($);
    log($('.div1'));
    log($('.div1').html());
}
component();

render(<Header />, document.getElementById("app"));