/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './AdminPanel.css'
/* eslint-enable no-unused-vars */

export default class AdminPanel extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: "",
			time: "",
		}
		this.handleEventCreation = this.handleEventCreation.bind(this)
	}
	componentDidMount(){
		document.body.className = "bg-dinner"
	}
	handleEventCreation(event){
		console.log(this.state.date)
		event.preventDefault()
		console.log("submit")
	}
  render () {
    return (

        <div className="dinner-root">
			<div className="dinner-box">
				<div className="dinner-panel">
					<h1>Admin Panel</h1>
					<h2>Create a new event</h2>
					<form onSubmit={this.handleEventCreation}>
						<h3>Event Date: </h3>
						<input type="date" value={this.state.date} onChange = {(event) => this.setState({date: event.target.value})}/>
						<h3>Event Time:</h3>
						<input type="time" value={this.state.time} onChange = {(event) => this.setState({time: event.target.value})}/>
						<br />
						<br />
						<input type="submit" value="Next"/>
					</form>
				</div>
			</div>
        </div>
    )
  }
}
