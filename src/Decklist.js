import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Header from './components/Header';
import Deck from './components/Deck';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View>
          <Header />
        </View>
        <View style={styles.decklist}>
          <Deck/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  decklist: {
    marginTop: 40
  }
});
