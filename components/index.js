class App extends React.Component {
	render() {
		return (
			<section>
				<Hello />
				<HelloWithProps to="Ringo" from="Paul" />
				<HelloWithProps to="Sunny" from="Cher" />
				<NumPicker />
			</section>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('hello'));
