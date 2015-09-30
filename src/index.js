import React, { Component } from 'react';
import App from './components/App';

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
