// ============================================================================
// BASIC COMPONENTS
// ============================================================================

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<h3>How's it going?</h3>
			</div>
		);
	}
}

function Goodbye() {
	return (
		<div>
			<h5>Goodbye!</h5>
		</div>
	);
}

ReactDOM.render(<Hello />, document.getElementById('hello'));
ReactDOM.render(<Goodbye />, document.getElementById('goodbye'));

// ============================================================================
// JSX DEMO
// ============================================================================

class JSXDemo extends React.Component {
	render() {
		let imageUrl =
			'https://images.unsplash.com/photo-1585919737907-b6841d5c3b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80';
		return (
			<section>
				<h1>Embedded JS: 2 * 4 = {2 * 4}</h1>
				<img src={imageUrl} />
			</section>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('jsxDemo'));

// ============================================================================
// JSX CONDITIONAL LOGIC
// ============================================================================

const getNum = () => {
	return Math.floor(Math.random() * 10) + 1;
};

class NumPicker extends React.Component {
	render() {
		let yesImgUrl =
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FnXxOjZrbnbRxS%2Fgiphy.gif&f=1&nofb=1';
		let num = getNum();
		return (
			<div>
				<h2>Your number is {num}</h2>
				<p>{num === 7 ? 'Lucky!' : 'An acceptable number.'}</p>
				{num === 7 ? <img src={yesImgUrl} /> : null}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('jsxConditional'));
