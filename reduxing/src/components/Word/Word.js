import React from 'react'
import { connect } from 'react-redux'
import { selectActiveWord } from '../../store/Word/reducer'

const Word = ({ word }) => <div>{word}</div>

const mapStateToProps = (state) => {
  return {
    word: selectActiveWord(state),
  }
}

export default connect(mapStateToProps)(Word)
