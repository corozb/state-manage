import React, { useRef } from 'react'
import { connect } from 'react-redux'

import updateWord from '../../store/Word/action'

const Form = ({ updateWord }) => {
  const wordRef = useRef(null)

  return (
    <>
      <input type='text' ref={wordRef} placeholder='typing' />
      <button onClick={() => updateWord(wordRef.current.value)}>Save in Store</button>
    </>
  )
}

/* - El método connect conecta un componente (en este caso Form) con la Store.
   - El primer parámetro (que en este caso vale null porque no lo necesitamos) es la función de este componente que recibiŕía el state de la store para pintarlo por pantalla.
   - El segundo parámetro es un objeto que contiene las acciones de redux que vamos a utilizar en el componente.
Tanto el state al que nos hemos suscrito con el primer parámetro, como las acciones del segundo le llegarán al componente como props.*/

export default connect(null, { updateWord })(Form)
//Si fuesen varios métodos a los que nos quisieramos conectar, lo haríamos de esta forma:
//export default connect(null, { modificaPalabra, modificaOtraCosa })(Form)
