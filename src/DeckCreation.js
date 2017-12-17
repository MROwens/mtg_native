import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import DeckTitle from './components/DeckTitle';
import CardList from './components/CardList';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';

class DeckCreation extends React.Component {

  renderCard(card){
    let swipeOptions = [
    {
      text: 'Delete',
      underlayColor: '#AD1F23',
      backgroundColor: 'red',
      type: 'delete',
      onPress: () => {this.props.removeCard(card.name)},
    }
  ];

    return (
      <Swipeout right={swipeOptions} autoClose={true} close={true}>
        <TouchableHighlight onPress={() => Actions.cardView({card, title: card.name})}>
          <View>
            <CardList name={card.name} mana={card.manaCost}/>
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/img/app_background.png')} />
        <View style={styles.header}>
          <DeckTitle/>
        </View>
        <View style={styles.decklist}>
          <FlatList
            data={this.props.decklist}
            renderItem={({item}) => this.renderCard(item)}
            keyExtractor={item => (item.multiverseid += 1)}
          />
        </View>
      </View>
    );
  }
}
//makes state availible to this components props
const mapStateToProps = state => {
  return {decklist: state.decklist};
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
    flex: 2.5,
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

export default connect(mapStateToProps, actions)(DeckCreation);
