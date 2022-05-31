import { useSelector } from 'react-redux'
import RecipeItem from './RecipeItem'
import { Link } from 'react-router-dom'

const FavoriteRecipeList = () => {
	const { favoriteRecipes } = useSelector((state) => state)

	return (
		<>
			<h4 className='link'>
				<Link to='/'>Home</Link>
			</h4>

			<h4>Favorite Recipes:</h4>
			{favoriteRecipes.map((recipe, index) => (
				<RecipeItem key={index} recipe={recipe} favoriteButton={false} />
			))}
		</>
	)
}

export default FavoriteRecipeList
