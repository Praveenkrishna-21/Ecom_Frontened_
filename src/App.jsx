import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CartItems from "./components/CartItems";
import CheckoutResponse from "./components/CheckoutResponse";
import { CartContext } from "./components/Context";
import Header from "./components/Header";
import Home from './components/Home';
import './components/Home.css';
import ProductDetails from './components/ProductDetails';

CartContext
function App() {
  const [isCheckoutDone, setIsCheckoutDone] = useState(false);

  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // Toggle add/remove
  const togglecarts = (prod) => {
    const exists = cart.some((fav) => fav.id === prod.id);
    if (exists) {
      setCart(cart.filter((fav) => fav.id !== prod.id));
    } else {
      setCart([...cart, prod]);
    }
  };

  return (
    <CartContext.Provider value={{ cart,setCart,togglecarts,searchValue,setSearchValue}}>
    <>
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/cartlist" element={<CartItems />} />
            <Route path="/checkout" element={<CheckoutResponse/>} />
          </Routes>
        </main>
      </>
      </CartContext.Provider>
    
  )
}

export default App
