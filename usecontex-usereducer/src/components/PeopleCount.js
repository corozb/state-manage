import { useContext } from 'react'

// context api
import peopleContext from '../context/peopleContext'

// const PeopleCount = ({ peopleCount }) => {
const PeopleCount = () => {
  const context = useContext(peopleContext)
  console.log(context, 'count')

  return <h2 className='text-center mt-4'>{context.people.length}</h2>
}

export default PeopleCount
