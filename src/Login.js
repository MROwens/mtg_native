import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/img/login_background.png')} />
        <View style={styles.title}>
          <Text style={[styles.h1, styles.text]}>Magic: The Deckbuilder</Text>
          <Text style={[styles.h2, styles.text]}>Create your own masterpiece</Text>
          <Text style={[styles.h2, styles.text]}>Forge into battle</Text>
        </View>
        <View style={styles.form}>
          <TextInput value='Username' style={styles.textinput}/>
          <TextInput value='Password' style={styles.textinput}/>
          <Button onPress={null} style={styles.button} title='Login'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF'
  },
  form: {
    flex: 1,
    marginTop: 40
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  h1: {
    fontSize: 60
  },
  h2: {
    fontSize: 25,
    marginTop: 5
  },
  textinput: {
    width: 300,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  text: {
    margin: 20,
    color: 'white'
  }
});
