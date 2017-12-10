import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CardTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    marginBottom: 5
  }
});
