import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			string: "test",
		};
	}
	fillLHSTextfield(i){
		return <LHSField value={i}/>;
	}
	fillRHSTextfield(i){
		return <RHSField value={i}/>;
	}
	render(){
		return (
			<div>
			<h1>ARG Aid</h1>
			{this.fillLHSTextfield(this.state.string)}
			{this.fillRHSTextfield(this.state.string)}
			</div>
			);
	}

}

class LHSField extends React.Component{
	render(){
		return (
			<textarea placeholder="String to decode...">
			{this.props.value}
			</textarea>
			);
	}
}

class RHSField extends React.Component{
	render(){
		return (
			<textarea placeholder="Result...">
			{this.props.value}
			</textarea>
			);
	}
}



ReactDOM.render(<TextDecode/>, document.getElementById('root'));