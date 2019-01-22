/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './AdminPanel.css'
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';
/* eslint-enable no-unused-vars */

export default class DateSetter extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: "",
			time: "20:00",

		}
		this.handleEventCreation = this.handleEventCreation.bind(this)
	}

	handleEventCreation(event){
		this.props.saveEventDateTime(this.state.date, this.state.time)
		event.preventDefault()
		console.log("submit")
	}
  render () {
	  let button = null
	  if (this.state.date.length > 0 && this.state.time.length > 0){
		  button = <Button type="submit">Next</Button>
	  }
    return (

		<div className="dinner-panel">
			<h1>Admin Panel</h1>
			<h2>Create a new event</h2>
			<form onSubmit={this.handleEventCreation}>
				<FormGroup>
				<h3>Event Date: </h3>
				<input type="date" value={this.state.date} onChange = {(event) => this.setState({date: event.target.value})}/>
				<h3>Event Time:</h3>
				<input type="time" value={this.state.time} onChange = {(event) => this.setState({time: event.target.value})}/>
				<br />
				<br />
				</FormGroup>
				{button}
			</form>
		</div>
    )
  }
}
