import { ActionTypes } from '../constans/action.type'
import fakestoreapi from '../../apis/fakeStoreApi'

export const fetchProducts = () => async (dispatch) => {
  const response = await fakestoreapi.get('/products')

  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  })
}

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`)

  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  })
}

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
