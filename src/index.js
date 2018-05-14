import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			string: "",
		}
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput = (event) =>{
		this.setState({
			string: event.target.value
		});
	}
	render(){
		return (
			<div>
				<TextBoxes onChange={this.handleInput} string={this.state.string}/>
			</div>
			);
	}

}

class TextBoxes extends React.Component{
	render(){
		return (
			<textarea placeholder="String to Decode" onChange={this.props.onChange}>{this.props.string}</textarea>
			);
	}
}


ReactDOM.render(<TextDecode/>, document.getElementById('root'));