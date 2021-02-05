import { useState, useContext } from 'react'

import PeopleContext from '../context/peopleContext'

// const Form = ({ addPerson }) => {
const Form = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' })
  // context api
  const context = useContext(PeopleContext)

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    }

    // addPerson(newPerson)
    // context api
    context.addPerson(newPerson)
    setPerson({ firstName: '', lastName: '' })
  }

  return (
    <div className='col'>
      <h2>Add a person: </h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='firstName'
              placeholder='First Name..'
              value={person.firstName}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='lastName'
              placeholder='Last Name..'
              value={person.lastName}
              onChange={onChange}
            />
          </div>
        </div>
        <button className='btn btn-success' type='submit'>
          Add person
        </button>
      </form>
    </div>
  )
}

export default Form
