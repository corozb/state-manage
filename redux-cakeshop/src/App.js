import CakeContainer from './components/CakeContainer'
import './App.css'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <div className='App'>
      <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <UserContainer />
    </div>
  )
}

export default App
