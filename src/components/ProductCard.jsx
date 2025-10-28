import { Link } from "react-router-dom";
import Addbutton from "./Addbutton";
import './ProductCard.css';
const ProductCard = ({prod}) => {

  
  return (

   
    <div className="card" >
         <Link to={`/products/${prod.id}`} className="card-link">
      
        <img
          src={prod.image}
          alt={prod.title}
        />
        <h3>{prod.title}</h3>
        
        <p>{prod.category}</p>
        <p>${prod.price}</p>
        </Link>
        
        <Addbutton prod={prod}/> 
      
    </div>
    
  )
}

export default ProductCard
