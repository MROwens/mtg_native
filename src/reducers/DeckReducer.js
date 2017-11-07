//reducers to catch actions / handle data
export default (state = [], action) => {
  switch(action.type){
    case 'select_card':
      return [...state, action.payload]
    case 'remove_card':
      const cardId = action.payload;
      return state.filter(card => card.name !== cardId);;
    default:
    return state;
  }
};
