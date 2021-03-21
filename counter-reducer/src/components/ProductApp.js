import { useReducer } from 'react'
import productReducer, { initialProducState } from '../reducers/productReducer'
import types from '../types'

const ProductApp = () => {
  const [productState, dispatch] = useReducer(productReducer, initialProducState)
  const { products, cart, activeProduct } = productState

  return (
    <>
      <h2>Product App</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.productShow,
                  payload: item,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productAddoCart,
                  payload: item,
                })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.title} - quantity {cartItem.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveOneFromCart,
                  payload: cartItem.id,
                })
              }
            >
              Remove One
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveFromCart,
                  payload: cartItem.id,
                })
              }
            >
              Remove All
            </button>
          </li>
        ))}
      </ul>

      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </>
  )
}

export default ProductApp
