import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TypeWriter from 'react-typewriter';

export default class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			typeDone : 0
		}
	}
  render() {
    return (
		<div className="bg">
	  	  <div className="title">
	  	  <h1>Hey, I&#39;m William.</h1>
		  	  <div className="cursive">
			  <h4><TypeWriter typing={1} onTypingEnd={()=> this.setState({typeDone: 1})}>I write code and make stuff.</TypeWriter></h4>
			  <h5><TypeWriter typing={this.state.typeDone}>For fun.</TypeWriter></h5>
		  	  </div>
	  	  </div>

  	  </div>
    );
  }
}
