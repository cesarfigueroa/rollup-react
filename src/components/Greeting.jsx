import React, { PureComponent, PropTypes } from 'react';
import { add } from '../utils/math';

class Greeting extends PureComponent {
  render() {
    return <h1>Hello, {this.props.subject}! 2 + 2 = {add(2, 2)}</h1>;
  }
}

Greeting.propTypes = {
  subject: PropTypes.string.isRequired
};

export default Greeting;
