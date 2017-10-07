import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
import Header from './components/Header';
import Deck from './components/Deck';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View style={styles.header}>
          <Header />
          <Deck/>
        </View>
        <View style={styles.decklist}>
          <FlatList
            data={[{key: 'Card Name1'}, {key: 'Card Name2'}, {key: 'Card Name3'}, {key: 'Card Name4'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  decklist: {
    flex: 3,
    marginTop: 40
  }
});
