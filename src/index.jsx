import React, { Component } from 'react';
import { render } from 'react-dom';
import Greeting from './components/Greeting';
import map from 'lodash-es/map';

class App extends Component {
  render() {
    return (
      <div>
        {map([1, 2, 3], i => <Greeting subject={`World ${i}`} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
