import { useState } from "react";
import minus from '../../assets/minus.png'
import plus from '../../assets/plus-sign.png'
import remove from '../../assets/x-mark.png'

function Cart() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [] );

    function kustuta(index) {
    products.splice(index,1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  function emptyCart() {
    products.splice(0);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  function arvutaKokku() {
    let sum = 0;
    products.forEach(item => sum = sum + item.product.price * item.quantity);
    return sum;
  }


  function suurendaKogust(index) {
    products[index].quantity++;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    

  }

  function vahendaKogust(index) {
    products[index].quantity--;
    if (products[index].quantity === 0) {
      products.splice(index,1);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));

  }

  function arvutaKogusedKokku() {
    let sum = 0;
    products.forEach(product => sum = sum + product.quantity);
    return sum;
  }

  return (
    <div>
        {products.length > 0 &&
              <div>
                <button onClick={emptyCart} >Empty the Cart</button>
                <div>{products.length} unique products, Total of {arvutaKogusedKokku()} products</div>
              </div>
            }
        
              {products.length === 0 && <div>Cart is Empty</div>}
              {products.map((product, index) =>
              <div className="product" key={product.title}>
                <div className="title" >{product.product.title}</div> <br />
                <div className="price" >{product.product.price}€</div> <br />
                <div className="quantity" >
                  <img className= "icon" src={minus} onClick={() =>vahendaKogust(index)} alt="" />
                  <div>{product.quantity} tk</div>  <br />
                  <img className= "icon" src={plus} onClick={() =>suurendaKogust(index)} alt="" />
                </div>
                <div className="total" >{(product.product.hind * product.quantity).toFixed(2)}€</div>  <br />
                <img className= "icon" src={remove} onClick={() => kustuta(index)} alt="" />
                </div> )}
                {products.length > 0 && <div>Total Sum: {arvutaKokku().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</div>}
    </div>
  )
}

export default Cart