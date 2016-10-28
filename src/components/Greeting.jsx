import React, { PureComponent, PropTypes } from 'react';

class Greeting extends PureComponent {
  render() {
    return <h1>Hello, {this.props.subject}!</h1>;
  }
}

Greeting.propTypes = {
  subject: PropTypes.string.isRequired
};

export default Greeting;
