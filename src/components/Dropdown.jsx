import { useContext } from 'react';
import { ProductContext } from './Context';
import './Dropdown.css';
const Dropdown = () => {
  const{product,setProduct}=useContext(ProductContext);
  return (
    
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", paddingRight: "20px", margin: "10px 0" }}>
  <select
    onChange={(e) => {
      const value = e.target.value;
      if (value === "low-high") {
        setProduct([...product].sort((a, b) => a.price - b.price));
      }
      if (value === "high-low") {
        setProduct([...product].sort((a, b) => b.price - a.price));
      }
      if (value === "rating-high") {
        setProduct([...product].sort((a, b) => b.rating.rate - a.rating.rate));
      }
    }}
    className="filter-dropdown"
  >
    <option value="">Sort By</option>
    <option value="low-high">Price: Low to High</option>
    <option value="high-low">Price: High to Low</option>
    <option value="rating-high">Rating: High to Low</option>
  </select>
</div>

    
  )
}

export default Dropdown
