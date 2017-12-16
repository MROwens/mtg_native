import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Deck extends React.Component {
  render() {
    console.log(this.props.card);
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../assets/img/app_background.png')} />
        <Image source={{uri: this.props.card.imageUrl}}
          style={styles.card}
          resizeMode='contain'
          resizeMethod='resize'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 3,
    marginLeft: 5,
    marginRight: 5
  },
  img: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  }
});
