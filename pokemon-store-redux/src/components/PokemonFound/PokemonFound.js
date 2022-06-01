import { useSelector } from 'react-redux'

const PokemonFound = () => {
  const searcher = useSelector((state) => state.searcher)

  const pokemon = searcher?.pokemon[0]

  return (
    <div>
      <h3 className='text-white'>Resultado: </h3>
      {searcher.loading && <div className='text-warning'>Buscando...</div>}
      {!!searcher.pokemon.length && (
        <div className='text-success'>
          <img src={pokemon.sprites.front_default} alt='' />
          <span>{pokemon?.name.toUpperCase()}</span>
        </div>
      )}
      {!!searcher?.error && <span className='text-danger'>{searcher?.error}</span>}
    </div>
  )
}
export default PokemonFound
