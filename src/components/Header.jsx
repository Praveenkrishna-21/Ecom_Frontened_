import { useContext } from 'react';
import { Link } from 'react-router';
import { CartContext } from './Context';
import './Header.css';
import SearchBar from './SearchBar';
const Header = () => {
    const{cart} = useContext(CartContext)
  return (
    <header className="header">
        <nav className="nav-container">
    <div className="logo">
      <Link to="/" className="card-link">MyStore</Link>
    </div>
    <SearchBar/> 
    <div className="nav-links">
      
      <Link to="/" className="card-link">HOME</Link>
      <Link to="/cartlist" className="card-link">CART ({cart.length})
      
    </Link>
    </div>
  </nav>
</header>
  )
}

export default Header
