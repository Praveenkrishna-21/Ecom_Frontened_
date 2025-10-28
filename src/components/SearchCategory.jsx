import { useContext } from 'react';
import { CartContext, ProductContext } from './Context';
import ProductList from './ProductList';
import './SearchCategory.css';
const SearchCategory = () => {
    const{product}=useContext(ProductContext);
    
    const{searchValue}=useContext(CartContext);
    const filteredproducts= Array.isArray(product)
    ? product.filter((prod) =>
        prod.category.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];
  return (
    <div className='product-container'>
      
    <ProductList products={filteredproducts}/>
    </div>
  );
};

export default SearchCategory
