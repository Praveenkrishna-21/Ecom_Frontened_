// import { useState } from 'react';
// import { Link } from 'react-router';
// import './Checkout.css';
// const Checkout = () => {
//     const[message,setMessage] = useState("");
//   return (
//     <Link to={`/checkout`} className="card-link">
//     <div className="checkout-container">
//         <button className="checkout-btn"
//             onClick={() => setMessage("Checkout Successful!")}
            
//         >
//         Checkout
//         </button>
//         <p className="checkout-msg">{message}</p> 
//     </div>
//     </Link>
//   )
// }

// export default Checkout


import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { CartContext } from './Context';

const Checkout = () => {
  const { cart,setCart} = useContext(CartContext);
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      return;
    }

    setMessage("Checkout Successful!");
    
    setCart([]);
  
  navigate("/checkout"); 
 
  };

  return (
    <div className="checkout-container">
      <p className="checkout-total">Total: ${totalAmount.toFixed(2)}</p>

      <button className="checkout-btn" onClick={handleCheckout} >
       CHECKOUT
      </button>

      {message && <p className="checkout-msg">{message}</p>}
    </div>
  );
};

export default Checkout;
