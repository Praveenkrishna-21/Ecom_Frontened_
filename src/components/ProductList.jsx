import ProductCard from './ProductCard';
import './ProductCard.css';
const ProductList = ({ products }) => {
  return (
     <ul className='product-grid'>
      {products.length === 0 ? (
        <p>NO PRODUCTS FOUND</p>
      ) : (
        products.map((prod) => (
          <div key={prod.id} className="cart-item-card">
            <ProductCard prod={prod} />
          </div>
        ))
      )}
    </ul>
  )
}

export default ProductList
