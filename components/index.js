class App extends React.Component {
	render() {
		let fruit = [ '🍒', '🍇', '🍍' ];

		return (
			<section>
				<Machine s1={fruit[0]} s2={fruit[0]} s3={fruit[0]} />
				<Machine s1={fruit[1]} s2={fruit[1]} s3={fruit[0]} />
				<Machine s1={fruit[0]} s2={fruit[1]} s3={fruit[2]} />
			</section>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
