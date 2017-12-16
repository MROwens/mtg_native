import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
