/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './Dinner.css'
/* eslint-enable no-unused-vars */

export default class Dinner extends Component {
	constructor(props){
		super(props)
		this.state = {
			code: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
		document.body.className = "bg-dinner"
	}
	handleSubmit(){
		console.log("submit")
	}
  render () {
    return (
        <div className="dinner-root">
			<div className="dinner-box">
		  		<h1>Dinnertime!</h1>
				<div id = "animated-example" className = "animated shake"></div>
				<h2>Secret Passcode:</h2>
				<h5>(if you know, you know)</h5>
				<form onSubmit = {this.handleSubmit}>
				Code:<input type="number" value={this.state.code} onChange = {(event) => this.setState({code: event.target.value})}/>
				<br />
				<input type="submit" value="Leggo"/>
				</form>
				<br />
				<br />
			</div>
        </div>
    )
  }
}
