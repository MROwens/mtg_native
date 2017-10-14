import React from 'react';
import { Text } from 'react-native';
import { Scene, Router, Stack, Actions, Tabs } from 'react-native-router-flux';
import Login from './Login';
import Decklist from './Decklist';
import NewDeck from './NewDeck';
import DeckCreation from './DeckCreation';
import Search from './Search';

const TabIcon = ({selected, title})=>{
  return(
    <Text style={{color: selected ? 'red': 'black'}}>{title}</Text>
  )
}

const RouterComponent = () => {
  return(
    <Router >
      <Scene key='root'>
        <Scene hideNavBar={true} key='login' component={Login} title='Login'/>

        <Scene key="tabbar" tabs tabBarStyles={{backgroundColor: '#FFF'}}>

          <Scene key='something' title='Decklist' icon={TabIcon}>

            <Scene
              hideNavBar={true}
              onRight={() => Actions.newDeck()}
              rightTitle='New Deck'
              key='decklist'
              component={Decklist}
            />
            <Scene key="deckCreation" component={DeckCreation} title='Add Cards' />
            <Scene key='newDeck' component={NewDeck} title='Add Cards' />

          </Scene>

          <Scene key='another' title='Search' icon={TabIcon}>
            <Scene hideNavBar={true} key='search' component={Search} title='Search' />
          </Scene>


        </Scene>






      </Scene>
    </Router>
  )
}

export default RouterComponent;
