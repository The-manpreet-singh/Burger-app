import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error:false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                    },
                    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            case actionTypes.REMOVE_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                            ...state.ingredients,
                            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                        },
                        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                }
                default:
                    return state;
    }

}

export default reducer;