import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    meatB: 0,
    cheese: 0,
    meatA: 0
  },
  totalPrice: 100
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          //if we just use action.ingredientName that would be the key
          //but instead we want value of action.ingredientName as key, so it is inside[]
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      };

    default:
      return state;
  }
};

export default reducer;
