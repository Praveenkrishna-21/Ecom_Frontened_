import { useState } from "react";
// import { CartContext } from "./Context";
import './Quantity.css';
const Quantity = ({prod,onRemove,setCart}) => {
    const [quantity,setQuantity] = useState(1);
    // const { cart, togglecarts } = useContext(CartContext);

     const updateCart = (newQty) => {
      setCart(prev =>
      prev.map(item =>
        item.id === prod.id ? { ...item, quantity: newQty } : item
      )
    );
  };
   const handleIncrease = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateCart(newQty);
  };
   const handleDecrease = () => {
    if (quantity <= 1) {
      onRemove(prod.id);
    } else {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateCart(newQty);
    }
  };
  
  return (
    
    <div className="quantity-container ">
      <button className="qty-btn"onClick={handleIncrease}>+</button>
      <p className="qty-value"> {quantity} </p>
      
      <button className="qty-btn" onClick={handleDecrease}>-</button>
      <p className="total-cost"> Total Cost : ${(quantity*prod.price).toFixed(2)}</p>
    </div>
  )
}

export default Quantity
