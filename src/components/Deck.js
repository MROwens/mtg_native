import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Image style={styles.img} source={require('../../assets/img/red_deck.png')} />
          <View style={styles.decktype}></View>
          <Text style={styles.text}>Deck Name</Text>
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
  text: {
    color: 'white',
    fontSize: 50,
    marginTop: 40,
    marginLeft: 30,
    backgroundColor: 'transparent'
  },
  deck: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    backgroundColor: '#CCC'
  },
  decktype: {
    width: 10,
    height: 150,
    backgroundColor: 'red',
  }
});
