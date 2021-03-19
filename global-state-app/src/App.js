import React from 'react'
import MyComponent from './components/MyComponent'
import StoreProvider from './store/StoreProvider'

const App = () => {
  return (
    <StoreProvider>
      <MyComponent />
    </StoreProvider>
  )
}

export default App
