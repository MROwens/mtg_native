import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ManaList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../assets/img/mana_red.png')} />
        <Image style={styles.img} source={require('../../assets/img/mana_red.png')} />
        <Image style={styles.img} source={require('../../assets/img/mana_red.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    width: 20,
    height: 20,
    margin: 2
    //flexDirection: 'row'
  }
});
