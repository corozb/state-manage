import { useEffect, useContext } from 'react'
import PeopleCount from './PeopleCount'

// context api
import PeopleContext from '../context/peopleContext'

// const NewestPerson = ({ newestPerson, peopleCount }) => {
const NewestPerson = () => {
  const context = useContext(PeopleContext)
  // context api
  const newestPerson = context.people[context.people.length - 1]

  console.log(context)

  useEffect(() => {
    const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`

    document.title = newestPersonName
    console.log('useEffect')

    return () => {
      console.log('unmounted')
    }
  }, [newestPerson])

  return (
    <div className='col col-sm-12'>
      <h2 className='mt-4 text-center'>Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}</h2>
      <PeopleCount />
    </div>
  )
}

export default NewestPerson
