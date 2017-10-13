import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './Login';
import Decklist from './Decklist';


const RouterComponent = () => {
  return(
    <Router >
      <Stack key='root'>
        <Scene key='login' component={Login} title='Login'/>
        <Scene key='decklist' component={Decklist} title='Decklist'  />
      </Stack>
    </Router>
  )
}

export default RouterComponent;
