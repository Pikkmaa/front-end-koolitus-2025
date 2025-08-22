import { useState } from "react"
import productsFromFile from '../../data/products.json'

function HomePage() {
    const [products, setProducts] = useState(productsFromFile);

    function addToCart(product) {
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        const found = cartLS.find(item => item.product.title === product.title);
        if (found !== undefined) {
            found.quantity++;
        } else {
            cartLS.push({"product": product, "quantity": 1});
        }
        localStorage.setItem("cart", JSON.stringify(cartLS));
    }


  return (
    <div>
        {products.map(product =>
        <div key={product.id}>
            <img style={{width: "100px"}} src={product.image} alt="" />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>

        )

        }
    </div>
  )
}

export default HomePage