import { ActionTypes } from '../constans/action.type'

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
})

export const selectedProducts = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
})

export const removeSelectedProducts = (product) => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
})
