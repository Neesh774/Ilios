import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
function App() {
  return (
    
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
    </Switch>
  )
}

export default App
