import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';

import axios from 'axios';

export default class Search extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      cardName: '',
      cards: []
    }

  }

  searchForCards(e){
    axios.get(`https://api.magicthegathering.io/v1/cards?name=${this.state.cardName}&gameFormat=standard`)
    .then(response => this.setState({cards: response.data.cards}));
  }



  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View style={styles.search}>
          <TextInput onChangeText={(text) => this.setState({cardName: text})} onSubmitEditing={() => this.searchForCards()} placeholder='Card name' style={styles.textinput}/>
          <TextInput placeholder='Color' style={styles.textinput}/>
        </View>
        <View style={styles.list}>
          <FlatList numColumns='2'
            data={this.state.cards}
            renderItem={({item}) => <Image source={{uri: item.imageUrl}} style={styles.card}/>}
            keyExtractor={item => item.id}
          />
        </View>
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
