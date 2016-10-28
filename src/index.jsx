import React, { Component } from 'react';
import { render } from 'react-dom';
import Greeting from './components/Greeting';

render(<Greeting subject="World" />, document.getElementById('root'));
