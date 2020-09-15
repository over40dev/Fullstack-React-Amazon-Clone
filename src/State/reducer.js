export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    
    case 'REMOVE_FROM_BASKET':
      // const indexToRemove = state?.basket?.map(item => item.id).indexOf(action.id);
      const indexToRemove = state?.basket?.findIndex(item => item.id === action.id);
      let newBasket = [...state.basket];

      if (indexToRemove >= 0) {
        newBasket.splice(indexToRemove, 1);
      } else {
        console.warn(`Cannot remove product (id: ${action.id}) as it is not in basket!`);
      }

      return {
        ...state,
        basket: newBasket
      }
      
      default:
        return {
          ...state,
        }
      }
    };

// Selector - best practice
export const getBasketTotal = (basket) => {
  return basket?.reduce((total, item) => total + item.price, 0);
}

export default reducer;
