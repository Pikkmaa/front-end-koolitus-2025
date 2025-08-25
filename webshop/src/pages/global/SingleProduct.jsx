import { useParams } from "react-router-dom";
import productsFromFile from '../../data/products.json'
import { CartSumContext } from "../../context/CartSumContext.jsx";
import { useContext } from "react";

function SingleProduct() {
  const {index} = useParams();
  const found = productsFromFile[index];
  const {cartSum, setCartSum} = useContext(CartSumContext);

  if (found === undefined) {
        return <div>Item not found</div>
    }

  function addToCart(product) {
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        const found = cartLS.find(item => item.product.title === product.title);
        if (found !== undefined) {
            found.quantity++;
        } else {
            cartLS.push({"product": product, "quantity": 1});
        }
        localStorage.setItem("cart", JSON.stringify(cartLS));
        setCartSum(cartSum + product.price);
    }

  return (
    <div>
      <div className="additional-info" >{found.title}</div>
      <div><strong>Category:</strong> {found.category}</div>
      <div><strong>Rating:</strong> {found.rating.rate} / {found.rating.count}</div>
      <div> <img className="product-image" src={found.image} alt="" /> </div>
      <div><strong>Price:</strong>{found.price}</div> <br />
      <button onClick={() => addToCart(found)}>Add to Cart</button> <br /> <br />
      <div><strong>Description:</strong></div>
      <div className="additional-info">{found.description}</div>
    </div>
  )
}

export default SingleProduct