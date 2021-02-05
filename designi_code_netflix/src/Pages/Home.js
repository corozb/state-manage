import React from 'react'
import SolidButton from '../components/buttons/solidButton/SolidButton'

const Home = () => {
  return (
    <>
      <h1>{process.env.REACT_APP_ENV}</h1>
      <SolidButton txt='Default Button' />
      <SolidButton txt='Primary Button' type='primary' />
      <SolidButton txt='Danger Button' type='danger' />
      <SolidButton txt='Success Button' type='success' />
    </>
  )
}

export default Home
