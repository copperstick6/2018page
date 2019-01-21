/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './AdminPanel.css'
import DateSetter from './DateSetter.js'
import { form, FormGroup, FormControl, Button } from 'react-bootstrap';
/* eslint-enable no-unused-vars */

export default class AdminPanel extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: "",
			time: "20:00",
			validated: false

		}
		this.saveEventDateTime = this.saveEventDateTime.bind(this)
	}
	componentDidMount(){
		document.body.className = "bg-dinner"
	}
	saveEventDateTime(date, time){
		console.log(date)
		console.log(time)
		this.setState({date: date, time: time}, ()=>{
			console.log(this.state.date)
			console.log(this.state.time)
		})
	}

  render () {
    return (

        <div className="dinner-root">
			<div className="dinner-box">
				<DateSetter saveEventDateTime={this.saveEventDateTime}/>
			</div>
        </div>
    )
  }
}
