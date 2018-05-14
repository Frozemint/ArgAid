import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TextDecode extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			string: "",
		}
	}
	handleInput = (event) =>{
		this.setState({
			string: event.target.value
		});
	}
	render(){
		return (
			<div>
				<TextBoxes name="Input" onChange={this.handleInput} string={this.state.string}/>
				<TextBoxes name="Output" onChange={this.handleInput} string={this.state.string}/>
			</div>
			);
	}

}

class TextBoxes extends React.Component{
	render(){
		return (
			<textarea name={this.props.name} placeholder={this.props.name + "..."} onChange={this.props.onChange}>{this.props.string}</textarea>
			);
	}
}


ReactDOM.render(<TextDecode/>, document.getElementById('root'));