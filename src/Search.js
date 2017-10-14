import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
import Header from './components/Header';
import Nav from './components/Nav';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View style={styles.search}>
          <TextInput value='Card name' style={styles.textinput}/>
          <TextInput value='Color' style={styles.textinput}/>
        </View>
        <View style={styles.list}>
          <FlatList numColumns='2'
            data={[
            {key: 'a'}, {key: 'b'}, {key: 'c'},
            {key: 'd'}, {key: 'e'}, {key: 'f'},
            {key: 'g'}, {key: 'h'}, {key: 'i'},
            {key: 'j'}, {key: 'k'}, {key: 'l'},
            {key: 'm'}, {key: 'n'}, {key: 'o'},
            {key: 'p'}, {key: 'q'}, {key: 'r'}
          ]}
            renderItem={({item}) => <Text style={styles.card}>{item.key}</Text>}
          />
        </View>
      {/* <Nav/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    minWidth: 400,
    height: 500,
    backgroundColor: 'transparent',
    marginTop: 30
  },
  textinput: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    fontSize: 25,
    padding: 5
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    paddingBottom: 15,
    backgroundColor: '#262626'
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    backgroundColor: '#CCC',
    marginTop: 30,
    marginLeft: 20,
    height: 250,
    width: 170,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: .2
  },
  list: {
    flex: 9
  }
});
