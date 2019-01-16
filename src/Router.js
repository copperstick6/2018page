/**
 * Router for client side routing of the frontend application
 */
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Page from './SPA'
import Dinner from './Dinner'
import Admin from './Admin'
import AdminPanel from './AdminPanel'

export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Page}/>
		<Route exact path="/admin_login" component={Admin}/>
		<Route exact path ="/admin_panel" component={AdminPanel}/>
		<Route exact path="/dinner" component={Dinner}/>
      </Switch>
    )
  }
}
