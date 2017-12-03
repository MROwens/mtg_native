import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => Actions.deckCreation()} >
          <View style={styles.deck}>
            <Image style={styles.img} source={require('../../assets/img/card_back.png')} />
            <View style={styles.decktype}></View>
            {/* <Text style={styles.text}>Deck Name</Text> */}
          </View>
        </TouchableHighlight>
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
    backgroundColor: '#CCC',
    height: 250,
    width: 170,
    marginLeft: 20
  },
  decktype: {
    marginTop: 100,
    width: 170,
    height: 45,
    backgroundColor: '#F1AA9D',
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#AB1F23',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2
  }
});
