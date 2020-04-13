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
