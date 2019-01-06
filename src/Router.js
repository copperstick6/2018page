/**
 * Router for client side routing of the frontend application
 */
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Page from './SPA'
import Dinner from './Dinner'

export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Page}/>
		<Route exact path="/dinner" component={Dinner}/>
      </Switch>
    )
  }
}
