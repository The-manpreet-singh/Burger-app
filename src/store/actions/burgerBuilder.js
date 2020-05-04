import * as actionTypes from './actionTypes';

export const addIngredient =(name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientNmae: name
    }
};

export const removeIngredient =(name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientNmae: name
    }
};