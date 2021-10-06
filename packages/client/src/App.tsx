import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Transcript from './Transcript'

export const App = () => (
  <ChakraProvider resetCSS>
    <BrowserRouter>
      <Switch>
        <Route path="/transcript" component={Transcript} />
        <Redirect to="/transcript" />
      </Switch>
    </BrowserRouter>
  </ChakraProvider>
)
