import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {addCharacterById} from '../actions'

function CharacterList(props) {
  return (
    <div>
      <h4>Character</h4>
      <ul className="list-group">
        {
          props.characters.map(character => (
        <li className="list-group-item" key={character.id}>
          <div className="list-item">
            {character.name}
          </div>
          <div className="list-item right-button" onClick={() => props.addCharacterById(character.id)}>+</div>
        </li>
        ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addCharacterById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)