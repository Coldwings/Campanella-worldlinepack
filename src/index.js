import React, { Component } from 'react';
import App from './components/App';

import './styles/base.sass';
import 'font-awesome/css/font-awesome.min.css';

class Root extends Component {

  componentDidMount () {
    console.log("^_^");
  }

  render () {
    return (
      <App />
    );
  }
}

React.render(
  <Root />,
  document.getElementById("app")
);
