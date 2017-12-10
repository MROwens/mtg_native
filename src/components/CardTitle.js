import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CardTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: .7
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  decklist: {
    flex: 2,
  },
  card: {
    backgroundColor: '#F3C9B7',
    borderWidth: 4,
    borderColor: '#F2B093',
    marginTop: 1,
    padding: 20,
    fontSize: 25
  }
});
