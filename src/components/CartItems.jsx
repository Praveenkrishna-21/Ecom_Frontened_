import { useContext } from 'react';
import './CartItems.css';
import Checkout from './Checkout';
import { CartContext } from './Context';
import ProductCard from './ProductCard';
import Quantity from './Quantity';
const CartItems = () => {
    const { cart,setCart} = useContext(CartContext);
    const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  return (
  <div className='item-container '>
  <h1 className="item-title">MY CART</h1>

  {cart.length === 0 ? (
    <p className="item-message">No Items yet!</p>
  ) : (
    <div className="item-grid">
      {cart.map((prod) => (
         <div key={prod.id} className="cart-item-card">
            
            <ProductCard prod={prod} />
            <Quantity prod={prod} onRemove={handleRemove} setCart={setCart}/>
            
        </div>
      ))}
      
    </div>
    
  )}
  <Checkout/>
  
</div>


  )
}

export default CartItems
