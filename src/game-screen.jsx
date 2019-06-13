import React, {useState} from 'react'

const GameScreen = () => {

	let [inputState, setInputState] = useState('')

	const updateInput = (event) => {
		setInputState(event.target.value)
	}

	return (
		<div>
			<h1>Text Adventure</h1>

			<samp>
				<p>input line</p>
				<p>result: output line</p>
				<p></p>
			</samp>

			<textarea
				onChange = {(event) => {
					updateInput(event)
				}}
				value = {inputState}
			></textarea>
			<br />
			<button
				onClick = {() => {
				
			}}>enter</button>

		</div>
	)
}

export default GameScreen
