import { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchPokemon from '../../redux/actions/searchActions'

const SearcherPokemon = () => {
  const dispatch = useDispatch()
  const [pokemonName, setPokemonName] = useState('mewtwo')

  const handleChange = (e) => setPokemonName(e.target.value)

  return (
    <div className='form-group'>
      <label htmlFor='search-pokemon' className='text-white'>
        Buscar Pokemon
      </label>
      <input type='text' className='form-control' id='buscar-pokemon' value={pokemonName} onChange={handleChange} />
      <button className='btn btn-primary mt-3' onClick={() => dispatch(fetchPokemon(pokemonName))}>
        Enviar
      </button>
    </div>
  )
}
export default SearcherPokemon
