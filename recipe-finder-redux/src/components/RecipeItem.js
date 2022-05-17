import {useState} from 'react'
import { useDispatch } from 'react-redux'

import {  favoriteRecipe } from '../actions'

const RecipeItem = (props) => {
  const {recipe, favoriteButton} = props
  const [favorited, setFavorited] = useState(false)
  const dispatch = useDispatch()

  const addFavorite = (recipe) => {
    dispatch(favoriteRecipe(recipe))
    setFavorited(true)
  }

  return (
    <div className="recipe-item">
      {
        favoriteButton 
        ? favorited 
          ? <button className="favorited">-</button> 
          : <button className="star" onClick={()=> addFavorite(recipe)}>+</button>
        : <div></div>
      }
      <h4 className="recipe-text">{recipe.display}</h4>
      <p className="recipe-text">{recipe.search_value}</p>
    </div>
  )
}

export default RecipeItem