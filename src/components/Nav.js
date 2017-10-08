import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class Nav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={styles.text}>Search</Text>
          <Text style={styles.text}>Decklist</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#262626',
    borderColor: 'white',
    height: 60,
    padding: 7,
    position: 'absolute',
    bottom: 0,
    width: 430
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
