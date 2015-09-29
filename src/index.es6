import React, { Component } from 'react';

class HelloWorld extends Component {

	componentDidMount () {
		console.log("^_^");
	}

	render () {
		return (
			<h1> Hello Campanella! </h1>
		);
	}
}

React.render(
	<HelloWorld />,
	document.getElementById("app")
);
