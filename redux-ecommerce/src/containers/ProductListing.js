import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductComponent from './ProductComponent'
import { fetchProducts } from '../redux/actions/productActions'

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
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
