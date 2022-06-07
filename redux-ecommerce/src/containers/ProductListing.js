import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products').catch((error) => {
      console.log('error ', error)
    })
    dispatch(setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, []) //eslint-disable-line

  return (
    <div className='ui grid container' style={{ paddingTop: '4.75rem' }}>
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
