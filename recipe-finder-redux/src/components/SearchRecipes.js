import {useState} from 'react'
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux';

import RecipeList from '../components/RecipeList'
import {setRecipes} from '../actions'


function SearchRecipes() {
  const [addIngredient, setAddIngredient ] = useState({
    ingredients: ''
  })
  const dispatch = useDispatch()

  const options = {
    method: 'GET',
    url: process.env.REACT_APP_API_URL,
    params: {prefix: addIngredient.ingredients},
    headers: {
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      'X-RapidAPI-Key': '05ee2d03bemsh66be001a9708e11p1f9043jsn80dde877fab6'
    }
  };

  const getData = async() => {
    axios.request(options).then(function (response) {
      dispatch(setRecipes(response.data))
    }).catch((error) => {
      console.error(error);
    });
  }

  const handleIngredient = (e) => {
    setAddIngredient({ingredients: e.target.value})
  }

  return (
    <>
      <Form>
      <FormGroup>
        <FormLabel className='mt-2'>Ingredients</FormLabel>
        <FormControl type='text' placeholder='garlic, chicken' onChange={handleIngredient}/>
      </FormGroup>
      <Button onClick={getData} className='mt-4'>Submit</Button>
      </Form>
      <RecipeList />
    </>
  )
}

export default SearchRecipes