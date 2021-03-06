import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import DeckTitle from './components/DeckTitle';


export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View style={styles.header}>
          <DeckTitle/>
        </View>
        <View style={styles.decklist}>
          <FlatList
            data={[

            ]}
            renderItem={({item}) => <Text style={styles.card}>{item.key}</Text>}
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
    flex: 2.3,
    marginTop: 20,
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
