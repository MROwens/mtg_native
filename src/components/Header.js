import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class Header extends React.Component {
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
    height: 60,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 3
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
