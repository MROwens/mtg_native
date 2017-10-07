import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Login from './src/Login';
import Search from './src/Search';
import Deck from './src/components/Deck';
import Decklist from './src/Decklist';
import DeckCreation from './src/DeckCreation';

export default class App extends React.Component {
  render() {
    return (
       //<Login/>
      //<Search/>
      <Decklist/>
      //<DeckCreation />
    );
  }
}

const styles = StyleSheet.create({

});
