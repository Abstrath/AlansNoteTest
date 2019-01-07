import React from 'react';
import ReactDOM from 'react-dom';
import {b, styles} from './Test_ptB';

// require ./Test_ptB.js
class ScreenText extends React.Component {
  render() {
    // React.createElement("div", null, 'Hello World');

    <h1 style={styles}>(b + ' world!')</h1>;
  }
} 

ReactDOM.render(<ScreenText />, 
    document.getElementById('app'));

// ReactDOM.render(React.createElement("div", null, 'Hello World'));
