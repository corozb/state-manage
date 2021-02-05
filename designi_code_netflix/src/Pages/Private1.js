import { useEffect, useState } from 'react'
import SolidButton from '../components/buttons/solidButton/SolidButton'

const Private1 = () => {
  const [users, setUsers] = useState([])
  const [scroll, setScroll] = useState(0)
  const API_URL = 'https://60108e4a7a0b4e0017255a61.mockapi.io/users'

  const handleUser = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Cristian',
        age: 36,
      }),
    }
    fetch(API_URL, requestOptions)
  }

  const fetchData = async () => {
    const res = await fetch(API_URL)
    const users = await res.json()
    setUsers(users)
  }

  useEffect(() => {
    fetchData()
  }, [users])

  useEffect(() => {
    console.log('running')
    document.title = `Users: ${users.length}`
  }, [users])

  useEffect(() => {
    console.log('scroll -start')
    const scrollListener = () => {
      console.log('scroll down')

      const scroll = window.scrollY
      const propScroll = document.body.style

      if (scroll > 0 && scroll <= 100) {
        propScroll.background = 'yellow'
      } else if (scroll > 100 && scroll <= 300) {
        propScroll.background = 'orange'
      } else if (scroll > 300) {
        propScroll.background = 'red'
      } else {
        propScroll.background = 'white'
      }
      setScroll(scroll)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <h3>Vista Privada 1</h3>
      <h2>Scroll: {scroll}</h2>
      {users.length ? (
        users.map((user, i) => {
          const { name = '', age = 18 } = user

          return (
            <h5 key={i}>
              Name: {name} | Age: {age}
            </h5>
          )
        })
      ) : (
        <h5> No data</h5>
      )}
      <SolidButton txt='Add User' onClick={handleUser} />
    </>
  )
}

export default Private1
