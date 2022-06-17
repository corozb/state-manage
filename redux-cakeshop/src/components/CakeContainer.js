// CONNECT
import { connect } from 'react-redux'

import { buyCake } from '../redux'

const CakeContainer = (props) => {
  console.log(props.numOfCakes)

  return (
    <div>
      <h1>Connect</h1>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
