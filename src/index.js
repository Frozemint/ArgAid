import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Decode(props){
	return <textarea placeholder="Result..." value={props.string}></textarea>;
}

class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			string: "",
			subjectBase: 2,
			resultBase: 10
		};
		this.handleInput = this.handleInput.bind(this);
	}
	getSubjectBase = (event) => { //subject is the string to decode
		this.setState({
			subjectBase: event.target.value,
		});
	}
	getResultBase = (event) => {
		this.setState({
			resultBase: event.target.value,
		});
	}
	handleInput = (event) => {
		this.setState({
			string: parseInt(event.target.value, this.state.subjectBase).toString(this.state.resultBase),
		});
	}
	render(){
		return (
			<div id="Main">
			<h1>ARG Aid</h1>
			<br></br>
			<div id="LHSDiv">
				<textarea placeholder="Number to decode..." onChange={this.handleInput}>
				{this.state.string}
				</textarea>
				<br></br>
				Interpret number As: <select 
					value={this.state.subjectBase}
					onChange={this.getSubjectBase}
					>
					<option value="2">Base 2 (Binary)</option>
					<option value="8">Base 8 (Octary)</option>
					<option value="10">Base 10 (Decimal)</option>
				</select>
			</div>
			<div id="RHSDiv">
				<Decode string={this.state.string}/>
				<br></br>
				and convert to: <select
					value="10"
					onChange={this.getResultBase}
					>
					<option value="2">Base 2 (Binary)</option>
					<option value="8">Base 8 (Octary)</option>
					<option value="10">Base 10 (Decimal)</option>
				</select>
			</div>
			</div>
			);
	}

}


ReactDOM.render(<TextDecode/>, document.getElementById('root'));