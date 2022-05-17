import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import RecipeItem from './RecipeItem'

function RecipeList() {
  const {recipes, favoriteRecipes } = useSelector(state => state)

  return (
    <>
    {
      favoriteRecipes.length > 0 &&
        <h4 className="link">
          <Link to='/favorites'>Favorites</Link>
        </h4>
    }
    {
      recipes?.results?.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} favoriteButton={true}/>
      ))
    } 
    </>
  )
}


export default RecipeList