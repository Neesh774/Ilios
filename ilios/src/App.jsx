import React, { useState } from 'react'
import logo from './logo.svg'
import {Router, Switch, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react';
import Home from './pages/Home';
function App() {
  return (
    <ChakraProvider>
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
      <Home/>
    </ChakraProvider>
  )
}

export default App
