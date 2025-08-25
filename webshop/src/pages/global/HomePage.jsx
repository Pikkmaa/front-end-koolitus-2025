import { useContext, useEffect, useState } from "react"
import productsFromFile from '../../data/products.json'
import { CartSumContext } from "../../context/CartSumContext.jsx";
import {Link} from 'react-router-dom'
import { useRef } from "react";

function HomePage() {
    const [products, setProducts] = useState(productsFromFile);
    const [categories, setCategories] = useState([]);
    const categoriesUrl = "https://webshop-30b2a-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
    const {cartSum, setCartSum} = useContext(CartSumContext);
    const sortRef = useRef();

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

    function handleSortChange() {
        const value = sortRef.current.value;
        if (value === "name-asc") sortNameAsc();
        else if (value === "name-desc") sortNameDesc();
        else if (value === "price-asc") sortPriceAsc();
        else if (value === "price-desc") sortPriceDesc();
        else if (value === "rate-asc") sortRateAsc();
        else if (value === "rate-desc") sortRateDesc();
        }
    
    function sortNameAsc() {
    products.sort((a, b) => a.title.localeCompare(b.title));
        setProducts(products.slice());
    }

    function sortNameDesc() {
        products.sort((a, b) => b.title.localeCompare(a.title));
        setProducts(products.slice());
    }

    function sortPriceAsc() {
        products.sort((a, b) => a.price - b.price);
        setProducts(products.slice());
    }

    function sortPriceDesc() {
        products.sort((a, b) => b.price - a.price);
        setProducts(products.slice());
    }

    function sortRateAsc() {
        products.sort((a, b) => (a.rating?.rate || 0) - (b.rating?.rate || 0));
        setProducts(products.slice());
    }

    function sortRateDesc() {
        products.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        setProducts(products.slice());
    }

    function filterByCategory(category) {
    if (category === "") {
        // show all products
        setProducts(productsFromFile.slice());
    } else {
        const filtered = productsFromFile.filter(p => p.category === category);
        setProducts(filtered);
    }
}


  return (
    <div>
        <label><strong>Sort by:</strong></label>
            <select ref={sortRef} onChange={handleSortChange}>
                <option value="">-- Select --</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Lowest to Highest</option>
                <option value="price-desc">Price Highest to Lowest</option>
                <option value="rate-asc">Rating Lowest to Highest</option>
                <option value="rate-desc">Rating Highest to Lowest</option>
            </select> <br />
        <div>
            <strong>Filter by category:</strong>
            <button onClick={() => filterByCategory("")}>All</button>
            {categories.map(category => (
                <button key={category.name} onClick={() => filterByCategory(category.name)}>
                {category.name}
                </button>
            ))}
        </div>
        {products.map((product, index) =>
        <div key={product.id}>
            <img style={{width: "100px"}} src={product.image} alt="" />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.rating.rate}</div>
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