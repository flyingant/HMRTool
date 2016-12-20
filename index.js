import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
const TARGET_EL = document.getElementById('root');

ReactDOM.render(<Component/>, TARGET_EL);
