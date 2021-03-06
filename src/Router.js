import React from 'react';
import { Image } from 'react-native';
import { Scene, Router, Stack, Actions, Tabs } from 'react-native-router-flux';
import Login from './Login';
import Decklist from './Decklist';
import NewDeck from './NewDeck';
import DeckCreation from './DeckCreation';
import Search from './Search';
import CardView from './components/CardView';


//react native router flux routes w/ tabs implementation
const RouterComponent = () => {
  return(
    <Router >
      <Scene hideNavBar={true} key='root'>
        <Scene hideNavBar={true}>
          <Scene hideNavBar={true} key='login' component={Login} title='Login'/>
        </Scene>

          <Scene key='main' title='Decklist'>

            <Scene
              onRight={() => Actions.newDeck()}
              onLeft={() => Actions.search()}
              rightTitle='New Deck'
              leftTitle='Search'
              key='decklist'
              component={Decklist}
              title='Decklist'
            />
            <Scene back={true} key="deckCreation" component={DeckCreation} rightTitle='Add Cards' onRight={() => Actions.search()} />
            <Scene key='newDeck' component={NewDeck} title='Add Cards' />

            <Scene key='search' back={true} component={Search} title='Search' />

            <Scene key='cardView' back={true} component={CardView} title='Card' />

          </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent;
