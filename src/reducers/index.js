import { combineReducers } from 'redux';
import  DeckReducer  from './DeckReducer';
//combine reduers in the case of multiple
export default combineReducers({
  decklist: DeckReducer
});
