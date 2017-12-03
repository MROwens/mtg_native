import React from 'react';
import { Image } from 'react-native';
import { Scene, Router, Stack, Actions, Tabs } from 'react-native-router-flux';
import Login from './Login';
import Decklist from './Decklist';
import NewDeck from './NewDeck';
import DeckCreation from './DeckCreation';
import Search from './Search';
//tab icon
const SearchIcon = ()=>{
  return(
    <Image style={{width: 30, height: 30}} resizeMode='contain' source={require('../assets/img/search-128.png')}/>
  )
}
//tab icon
const CardIcon = ()=>{
  return(
    <Image style={{width: 30, height: 30}} resizeMode='contain' source={require('../assets/img/cards.png')}/>
  )
}
//react native router flux routes w/ tabs implementation
const RouterComponent = () => {
  return(
    <Router >
      <Scene hideNavBar={true} key='root'>
        <Scene hideNavBar={true}>
          <Scene hideNavBar={true} key='login' component={Login} title='Login'/>
        </Scene>

        {/* <Stack animationEnabled={true} key="tabbar" tabs tabBarStyles={{backgroundColor: '#FFF'}}> */}

          <Scene key='main' title='Decklist' icon={CardIcon}>

            <Scene
              onRight={() => Actions.newDeck()}
              rightTitle='New Deck'
              key='decklist'
              component={Decklist}
              title='Decklist'
            />
            <Scene back={true} key="deckCreation" component={DeckCreation} title='Add Cards' />
            <Scene key='newDeck' component={NewDeck} title='Add Cards' />

          </Scene>

          <Scene key='search' title='Search' icon={SearchIcon}>
            <Scene key='search' component={Search} title='Search' />
          </Scene>


        {/* </Stack> */}

      </Scene>
    </Router>
  )
}

export default RouterComponent;
