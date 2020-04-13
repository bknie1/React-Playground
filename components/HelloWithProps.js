class HelloWithProps extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.to}!</h1>
				<h3>How's it going?</h3>
				<h4>From {this.props.from}</h4>
			</div>
		);
	}
}
