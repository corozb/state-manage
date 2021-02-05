import { useContext } from 'react'
import PeopleContext from '../context/peopleContext'

// const People = ({ people }) => {
// context api
const People = () => {
  const context = useContext(PeopleContext)

  return (
    <div className='col'>
      <h2>People: </h2>
      <hr />
      {/* {people.map((person) => ( */}
      {context.people.map((person) => (
        <div key={Math.random() * 1000000000}>
          <p>
            {person.firstName} {person.lastName}
          </p>
        </div>
      ))}
    </div>
  )
}

export default People
