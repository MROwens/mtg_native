import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Login from './Login';
import Decklist from './Decklist';
import NewDeck from './NewDeck';
import DeckCreation from './DeckCreation';
import Search from './Search';


const RouterComponent = () => {
  return(
    <Router >
      <Stack key='root'>
        <Scene key='login' component={Login} title='Login'/>
        <Scene
          onRight={() => Actions.newDeck()}
          rightTitle='New Deck'
          key='decklist'
          component={Decklist}
          title='Decklist'
        />
        <Scene key='search' component={Search} title='Search' />
        <Scene key="deckCreation" component={DeckCreation} title='Add Cards' />
        <Scene key='newDeck' component={NewDeck} title='Add Cards' />
      </Stack>
    </Router>
  )
}

export default RouterComponent;
