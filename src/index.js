import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextDecode extends React.Component{

	render(){
		return (
			<div>
			<h1>ARG Aid</h1>
			<textarea/>
			<textarea/>
			</div>
			);
	}
}



ReactDOM.render(<TextDecode/>, document.getElementById('root'));