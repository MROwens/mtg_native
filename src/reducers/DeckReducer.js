export default (state = [], action) => {
  if (action.type === 'select_card'){
    return [...state, action.payload];
  }
  return state;
};
