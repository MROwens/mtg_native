import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <Header/>
        <FlatList  numColumns='3'
          data={[
          {key: 'a'}, {key: 'b'}, {key: 'c'},
          {key: 'd'}, {key: 'e'}, {key: 'f'},
          {key: 'g'}, {key: 'h'}, {key: 'i'},
          {key: 'j'}, {key: 'k'}, {key: 'l'},
          {key: 'm'}, {key: 'n'}, {key: 'o'},
          {key: 'p'}, {key: 'q'}, {key: 'r'}
        ]}
          renderItem={({item}) => <Text style={styles.list}>{item.key}</Text>}
        />
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
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  list: {
    justifyContent: 'center',
    backgroundColor: '#CCC',
    marginTop: 30,
    marginLeft: 20,
    height: 150,
    width: 100,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: .2
  }
});
