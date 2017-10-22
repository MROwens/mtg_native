import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Deck from './components/Deck';
import { Tabs } from 'react-native-router-flux';


export default class Decklist extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
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
    flex: 1,
    marginTop: 40
  }
});
