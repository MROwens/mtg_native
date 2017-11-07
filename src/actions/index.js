//actions to pass data to reducers
export const selectCard = (item) => {
  return{
    type: 'select_card',
    payload: item
  }
}

export const removeCard = (cardId) => {
  return{
    type: 'remove_card',
    payload: cardId
  }
}
