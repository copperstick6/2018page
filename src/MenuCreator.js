/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './AdminPanel.css'
import { form, FormGroup, FormControl, Button, Tabs, Tab} from 'react-bootstrap';
import FileReader from './FileReader.js'
/* eslint-enable no-unused-vars */

export default class MenuCreator extends Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.handleEventCreation = this.handleEventCreation.bind(this)
	}

	handleEventCreation(event){
		event.preventDefault()
		console.log("submit")
	}
  render () {
	  let button = null
    return (

		<div className="dinner-panel">
			<h1>Upload a menu</h1>
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
			  <Tab eventKey={1} title="Manual CSV Input">
				  <FormGroup controlId="formControlsTextarea">
					<FormControl componentClass="textarea" placeholder="textarea" />
				  </FormGroup>
			  </Tab>
			  <Tab eventKey={2} title="CSV Upload">
				  <FileReader/>
			  </Tab>
			</Tabs>
		</div>
    )
  }
}
