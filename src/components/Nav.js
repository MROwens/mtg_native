import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class Nav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#232323',
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
