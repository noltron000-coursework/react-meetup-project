import React from 'react'

class GameScreen extends React.Component {

	constructor(props) {
		super(props)
		this.updateInput = this.updateInput.bind(this)
	}

	updateInput = (event) => {
		console.log(event.target.value)
	}

	render () {
		return(
			<div>
				<p>hello world!</p>
				<samp>
					<p>input line</p>
					<p>result: output line</p>
				</samp>
				<textarea
					onChange = {(event) => {
						this.updateInput(event)
					}}
				></textarea>
				<button>enter</button>
				<ul>
					<li><a>up</a></li>
					<li><a>down</a></li>
					<li><a>left</a></li>
					<li><a>right</a></li>
				</ul>
			</div>
		)
	}
}

export default GameScreen
