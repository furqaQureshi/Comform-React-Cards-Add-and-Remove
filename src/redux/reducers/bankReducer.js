const initialState = {
  card: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "deposit":
      return { ...state, card: [...state.card, action.payload]}
    case 'withdraw':
      const filtered = state.card.filter(product => product.id !== action.payload);
      return {
        ...state,
        card: filtered,
      }
    case 'INC':
      let product = action.payload;
      product.qty = (product.qty ? product.qty : 1) + 1;
      let oldCards = state.card.filter(p => p.id !== product.id);
      return {...state, card: [...oldCards, product ] }
    case 'DEC':
      let currentCard = action.payload;
      let filt;
        filt = state.card.filter(product => product.id !== currentCard.id)
      if (currentCard.qty > 1) {
        currentCard.qty -= 1;
        return {
          ...state, card: [...filt, currentCard] 
        }
      } else {
        return {
          ...state, card: [...filt] 
        }
      }
    
    default:
      return state;
  }
}
export default reducer;