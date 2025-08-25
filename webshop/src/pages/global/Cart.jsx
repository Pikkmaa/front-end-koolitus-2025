import { useContext, useState } from "react";
import minus from '../../assets/minus.png'
import plus from '../../assets/plus-sign.png'
import remove_icon from '../../assets/x-mark.png'
import Payment from "../../components/Payment";
import { CartSumContext } from "../../context/CartSumContext.jsx";

function Cart() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [] );
    const {setCartSum} = useContext(CartSumContext);

    function remove(index) {
    products.splice(index,1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(calculateTotal())
  }

  function emptyCart() {
    products.splice(0);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(calculateTotal())
  }

  function calculateTotal() {
    let sum = 0;
    products.forEach(item => sum = sum + item.product.price * item.quantity);

    return sum;
  }


  function increaseQuantity(index) {
    products[index].quantity++;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(calculateTotal())
  }

  function decreaseQuantity(index) {
    products[index].quantity--;
    if (products[index].quantity === 0) {
      products.splice(index,1);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    setCartSum(calculateTotal())
  }

  function calculateTotalQuantity() {
    let sum = 0;
    products.forEach(product => sum = sum + product.quantity);
    return sum;
  }

  return (
    <div>
      {products.length > 0 &&
        <div>
          <button onClick={emptyCart} >Empty the Cart</button>
          <div>{products.length} unique products, Total of {calculateTotalQuantity()} products</div>
        </div>
      }
      
      {products.length === 0 && <div>Cart is Empty</div>}
      {products.map((product, index) =>
      <div className="product" key={product.title}>
        <div className="title" >{product.product.title}</div> <br />
        <div className="price" >{product.product.price}€</div> <br />
        <div className="quantity" >
          <img className= "icon" src={minus} onClick={() =>decreaseQuantity(index)} alt="" />
          <div>{product.quantity} tk</div>  <br />
          <img className= "icon" src={plus} onClick={() =>increaseQuantity(index)} alt="" />
        </div>
        <div className="total" >{(product.product.price * product.quantity).toFixed(2)}€</div>  <br />
        <img className= "icon" src={remove_icon} onClick={() => remove(index)} alt="" />
        </div> )}
        {products.length > 0 && <div>Total Sum: {calculateTotal().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</div>}
        <Payment sum= {calculateTotal()}/>
    </div>
  )
}

export default Cart