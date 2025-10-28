import { useEffect, useState } from 'react';
import { ProductContext } from './Context';
import Dropdown from './Dropdown';
import SearchCategory from './SearchCategory';
const Home = () => {
  const [product,setProduct]=useState([]);
  
  useEffect(() => {
  const fetchProducts = async () => {
     

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      
    }
    
  };

  fetchProducts();
}, []);

  
  return (
    <>
    <ProductContext.Provider value={{product,setProduct}}>
    <div className='home-style'>
      {/* <Header/> */}
      
      <Dropdown/>
      <SearchCategory/>
      
      
    </div>
    </ProductContext.Provider>
    </>
  );
};

export default Home





















{/*     
      <ul className="product-grid">
        
  {product.map((prod) => (
    
    <div key={prod.id}>
      
      <ProductCard prod={prod} />
    
    </div>
    
  ))}
</ul> */}