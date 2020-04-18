import React, { Component } from 'react';

export default class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = { num: 0 };
		this.makeTimer();
	}

	makeTimer() {
		setInterval(() => {
			let rand = Math.floor(Math.random() * this.props.maxNum);
			this.setState({ num: rand });
		}, 1000);
	}

	render() {
		return <div className="Rando">{this.state.num}</div>;
	}
}
