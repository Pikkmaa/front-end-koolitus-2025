import { useContext, useEffect, useState } from "react"
import productsFromFile from '../../data/products.json'
import { CartSumContext } from "../../context/CartSumContext.jsx";
import {Link} from 'react-router-dom'

function HomePage() {
    const products = productsFromFile;
    const [categories, setCategories] = useState([]);
    const categoriesUrl = "https://webshop-30b2a-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
    const {cartSum, setCartSum} = useContext(CartSumContext);

    useEffect(() => {
        fetch(categoriesUrl)
        .then(res => res.json())
        .then(json => setCategories(json || []))
        
    }, []);

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
        {categories.map(category =>
            <button>{category.name}</button>
        )}
        {products.map((product, index) =>
        <div key={product.id}>
            <img style={{width: "100px"}} src={product.image} alt="" />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={"/product/" + index} >
                <button>Additional information</button>
            </Link>
        </div>

        )

        }
    </div>
  )
}

export default HomePage