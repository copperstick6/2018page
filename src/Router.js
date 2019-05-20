/**
 * Router for client side routing of the frontend application
 */
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Page from './SPA'

export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Page}/>
      </Switch>
    )
  }
}
