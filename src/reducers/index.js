import { combineReducers } from 'redux';
import  DeckReducer  from './DeckReducer';

export default combineReducers({
  decklist: DeckReducer
});
