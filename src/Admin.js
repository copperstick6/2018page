/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './Admin.css'
/* eslint-enable no-unused-vars */

export default class Admin extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
	}
	handleSubmit(event){
		event.preventDefault()
		console.log("submit")
	}
  render () {
    return (
		<div>

		</div>
    )
  }
}
