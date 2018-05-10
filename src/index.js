import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Decode(props){
	return <textarea placeholder="Result..." value={props.string}></textarea>;
}

class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			string: "test",
		};
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(event){
		this.setState({string: event.target.value});
		//alert(event.target.value);
	}
	render(){
		const string = this.state.string;
		return (
			<div>
			<h1>ARG Aid</h1>
			<textarea placeholder="String to decode..." onChange={this.handleInput}>
			{this.state.string}
			</textarea>
			<Decode string={this.state.string}/>
			</div>
			);
	}

}


ReactDOM.render(<TextDecode/>, document.getElementById('root'));