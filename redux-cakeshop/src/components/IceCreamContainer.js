// HOOKS
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>IceCream Container</h1>
      <h2>Number of IceCream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
