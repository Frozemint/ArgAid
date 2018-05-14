import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			string: "",
			inputBase: 2,
			outputBase: 10
		}
	}
	handleInput = (event) =>{
		this.setState({
			string: parseInt(event.target.value, this.state.inputBase).toString(this.state.outputBase)
		});
	}
	handleClick = (event) =>{

		if (event.target.name === "InputDropdown"){
				this.setState({
					inputBase: event.target.value
				});
			} else {
				this.setState({
					outputBase: event.target.value
				});
			}
	}
	render(){
		return (
			<div id="Main">
				<h1>ARG Aid</h1>
				<br></br>
				<div id="LHSDiv">
					<textarea onChange={this.handleInput} string={this.state.string}/>
					<br/>
					Interpret input as: <DropDown name="InputDropdown" value={this.state.inputBase} onChange={this.handleClick}/>
				</div>
				<div id="RHSDiv">
					<textarea disabled value={this.state.string}/>
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
						<option value="2">Base 2 (Binary) number</option>
						<option value="8">Base 8 (Octary) number</option>
						<option value="10">Base 10 (Decimal) number</option>
					</select>
					);
	}
}


ReactDOM.render(<TextDecode/>, document.getElementById('root'));