// import { useContext } from 'react'
// import { StoreContext } from '../store/StoreProvider'
import { useStore, useDispatch } from '../store/StoreProvider'
import { types } from '../store/storeReducer'

const MyComponent = () => {
  // const [store, dispatch] = useContext(StoreContext)
  // const { user, products } = store
  const { user, products } = useStore()
  const dispatch = useDispatch()

  return (
    <>
      <h1>My Components</h1>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: types.authLogout })}>Logout</button>
      <button
        onClick={() =>
          dispatch({
            type: types.authLogin,
            payload: {
              id: 1,
              name: 'Luis',
            },
          })
        }
      >
        Login
      </button>

      <h2>Productos</h2>
      <ul>
        {products.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: types.productDeleteAll })}>Delete All</button>
      <button onClick={() => dispatch({ type: types.productChange })}>Change</button>
    </>
  )
}

export default MyComponent
