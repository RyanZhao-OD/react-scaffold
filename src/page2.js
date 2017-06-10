import $ from 'jquery';
import log from './lib/lib.js';
import Footer from './components/Footer/Footer.js'

function component () {
    log($);
    alert(222);
    log($('.div1'));
    log($('.div1').html());
}

let footer = new Footer();

component();