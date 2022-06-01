import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import CantidadPokemon from './components/CantidadPokemon/CantidadPokemon'
import CompraPokemon from './components/CompraPokemon/CompraPokemon'
import POKE from './assets/pokemon.jpg'
import store from './redux/store'
import SearcherPokemon from './components/Searcher/SearcherPokemon'
import './App.css'
import PokemonFound from './components/PokemonFound/PokemonFound'

function App() {
  return (
    <Provider store={store}>
      <div className='App container'>
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{ maxWidth: '370px' }}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={POKE} alt='pokemon' className='card-img h-100' />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text'>
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 mt-4 border-top pt-3'>
            <SearcherPokemon />
          </div>
          <div className='col-12 mt-4'>
            <PokemonFound />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
