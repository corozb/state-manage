// import { useState } from 'react'
import { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Form from './components/Form'
import NewestPerson from './components/NewestPerson'
import People from './components/People'

// context api
import PeopleContext from './context/peopleContext'
import peopleReducer from './context/peopleReducer'
import { ADD_PERSON } from './context/types'

function App() {
  // const [people, setPeople] = useState([
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //   },
  //   {
  //     firstName: 'Jane',
  //     lastName: 'Doe',
  //   },
  // ])

  // const addPerson = (person) => {
  //   setPeople([...people, person])
  // }

  // context api
  const initialState = {
    people: [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    ],
  }

  const [state, dispatch] = useReducer(peopleReducer, initialState)

  const addPerson = (person) => {
    dispatch({
      type: ADD_PERSON,
      payload: person,
    })
  }

  // useState
  // return (
  //   <>
  //     <div className='container mt-4'>
  //       <div className='row'>
  //         <Form addPerson={addPerson} />
  //         <People people={people} />
  //         <NewestPerson newestPerson={people[people.length - 1]} peopleCount={people.length} />
  //       </div>
  //     </div>
  //   </>
  // )

  // api context
  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        addPerson,
      }}
    >
      <div className='container mt-4'>
        <div className='row'>
          <Form />
          <People />
          <NewestPerson />
        </div>
      </div>
    </PeopleContext.Provider>
  )
}

export default App
