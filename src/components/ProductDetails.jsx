import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Addbutton from "./Addbutton";
import './ProductDetails.css';
const ProductDetails = () => {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    useEffect(() => {
    const fetchProductDetails = async () => {
      const response =
        await fetch(`https://fakestoreapi.com/products/${id}`);
      
      const data = await response.json();
      setProd(data);
    };

    fetchProductDetails();
  }, [id]);

  if (!prod) return <p>Loading...</p>;
  return (
    <div className="prod-c">
      
      <img
        src={prod.image}
        alt={prod.title}
        className="prod-poster"
      />
      <div className="prod-details">
        <h2 className="prod-title">{prod.title}</h2>
        <p>
          <strong>Description :</strong> {prod.description}
        </p>
         <p>
          <strong>Price : $</strong> {prod.price}
        </p>
        <p>
          <strong>Rating⭐:</strong> {prod.rating.rate ? prod.rating.rate.toFixed(1):'N/A'} 
        </p>
        <Addbutton prod={prod}/>
        
      </div>
      
    </div>
  )
}

export default ProductDetails
