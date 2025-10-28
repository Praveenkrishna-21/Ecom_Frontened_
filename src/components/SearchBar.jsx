import { useContext } from 'react';
import { CartContext } from './Context';
import './Header.css';
const SearchBar = () => {
  const{searchValue,setSearchValue} =useContext(CartContext);
  return (
      <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
     
    </div>
  )
}

export default SearchBar
