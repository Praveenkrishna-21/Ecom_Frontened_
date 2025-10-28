import { useContext } from 'react';
import './Addbutton.css';
import { CartContext } from './Context';
const Addbutton = ({prod}) => {
    const{togglecarts,cart}=useContext(CartContext)
    const isincart = cart.some((fav) => fav.id === prod.id);
  return (
    <div>
      <button className="add-to-cart-btn" onClick={()=>togglecarts(prod)}>
           {isincart?"Remove From cart": "Add to Cart 🛒"}</button>
    </div>
  )
}

export default Addbutton
