import { useState } from "react";
import { CartSumContext } from "./CartSumContext";

export function CartSumContextProvider({children}) {
    const [cartSum, setCartSum] = useState(calculateCartSum());
    
    function calculateCartSum () {
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        let sum = 0;
        cartLS.forEach(item => sum = sum + item.product.price * item.quantity);
        return sum;
    }
    return (
        <CartSumContext.Provider value={{cartSum, setCartSum}} >
            {children}
        </CartSumContext.Provider>
    )
}