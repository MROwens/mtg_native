import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardTitle from './CardTitle';
import ManaList from './ManaList';

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardTitle name={this.props.name} />
        <ManaList mana={this.props.mana} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1AA9D',
    borderWidth: 1,
    borderColor: '#AD1F23',
    padding: 20
  }
});
