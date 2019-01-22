/* eslint-disable no-unused-vars */
import React, {Component} from 'react'
import './Admin.css'
/* eslint-enable no-unused-vars */
import {withCookies, Cookies} from 'react-cookie'

class Admin extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
		document.body.className = "bg-dinner"
	}
	handleSubmit(event){
		event.preventDefault()
		console.log("submit")
	}
  render () {
    return (

        <div className="dinner-root">
			<div className="dinner-box">
		  		<h1>Admin Panel Login</h1>
				<form onSubmit = {this.handleSubmit}>
				Username: <input value={this.state.username} onChange = {(event) => this.setState({username: event.target.value})}/>
				<br />
				Password: <input type="password" value={this.state.password} onChange = {(event) => this.setState({password: event.target.value})}/>
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
export default withCookies(Admin)
