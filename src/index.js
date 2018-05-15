import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var decodeClass = require('./decodecore.js');

class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			input: "",
			result: "",
			inputBase: "2",
			outputBase: "10"
		}
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput = (event) =>{
		this.setState({
			input: event.target.value,
			result: decodeClass.processString(this.state.inputBase, this.state.outputBase, event.target.value)
		});
	}
	handleClick = (event) =>{
		if (event.target.name === "InputDropdown"){
			this.setState({
				inputBase: event.target.value,
				result: parseInt(this.state.input.toLowerCase(), event.target.value).toString(this.state.outputBase),
			});
		} else {
			this.setState({
				outputBase: event.target.value,
				result: parseInt(this.state.input, this.state.inputBase).toString(event.target.value),
			});
		}

	}
	render(){
		return (
			<div id="Main">
				<div id="LHSDiv">
					<textarea onChange={this.handleInput}/>
					<br/>
					Interpret input as: <DropDown name="InputDropdown" value={this.state.inputBase} onChange={this.handleClick}/>
				</div>
				<div id="RHSDiv">
					<textarea disabled value={this.state.result}/>
					<br/>
					Output as: <DropDown name="OutputDropdown" value={this.state.outputBase} onChange={this.handleClick}/>
				</div>
			</div>
			);
	}

}

class DropDown extends React.Component{
	render(){
		return (
			<select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
						<option value="2">Base 2 (Binary)</option>
						<option value="8">Base 8 (Octary)</option>
						<option value="10">Base 10 (Decimal)</option>
						<option value="16">Base 16 (Hexadecimal)</option>
						<option value="32">Base 32</option>
					</select>
					);
	}
}
ReactDOM.render(<TextDecode/>, document.getElementById('app'));