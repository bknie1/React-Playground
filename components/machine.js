class Machine extends React.Component {
	render() {
		let props = this.props;

		let areSame = Object.values(props).every((p) => {
			return p == props['s1'];
		});

		return (
			<div>
				<span>
					{props.s1} {props.s2} {props.s3}
				</span>
				<p>{areSame ? 'You win!' : ''}</p>
			</div>
		);
	}
}
