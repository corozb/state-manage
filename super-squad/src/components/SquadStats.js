import {connect} from 'react-redux'

function SquadStats(props) {
  const strenght = () => {
    let strenght = 0
    props.heroes.forEach(hero => strenght += hero.strength)
    return strenght
  }

  const intelligence = () => {
    let intelligence = 0
    props.heroes.forEach(hero => intelligence += hero.intelligence)
    return intelligence
  }

  const speed = () => {
    let speed = 0
    props.heroes.forEach(hero => speed += hero.speed)
    return speed
  }

  return (
    <>
    <h4>SquadStats</h4>
    <ul className="list-group">
      <li className="list-group-item">
        <b>Overall Strength {strenght()}</b>
      </li>
      <li className="list-group-item">
        <b>Overall Intelligence {intelligence()}</b>
      </li>
      <li className="list-group-item">
        <b>Overall Speed {speed()}</b>
      </li>
    </ul>
    </>
  )
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(SquadStats)