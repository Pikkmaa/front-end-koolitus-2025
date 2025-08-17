import { useRef } from "react";
import { useState } from "react"

function LisaArvuti() {
    const [sonum, setSonum] = useState("Lisa arvuti");
    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();
    
    
    function addProduct() {
        setSonum("Arvuti lisatud!");
        const uusArvuti = {
          "mark": markRef.current.value,
          "mudel": mudelRef.current.value,
          "maksumus": maksumusRef.current.value,
        }

        const arvutid = JSON.parse(localStorage.getItem("laptops")) || [];
        arvutid.push(uusArvuti);
        localStorage.setItem("laptops", JSON.stringify(arvutid));

    }


  return (
    <div>
        <div>Sõnum: {sonum}</div>
        <label>Mark</label> <br />
        <input ref={markRef} type="text" /> <br />
        <label>Mudel</label> <br />
        <input ref={mudelRef} type="text"/> <br />
        <label>Maksumus</label> <br />
        <input ref={maksumusRef} type="number" /> <br />
        <button onClick={() => addProduct()} >Sisesta</button>
    </div>
  )
}

export default LisaArvuti