import { useState } from "react";
import { useRef } from "react"

function LisaUudis() {
    const uudiseRef = useRef();
    const [sonum, setSonum] = useState("");

    function lisaUusUudis() {
        const uudised = JSON.parse(localStorage.getItem("uudisedId")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudisedId", JSON.stringify(uudised));

    }
    function kontroll() {
        setSonum("")
        if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
            setSonum("Alustad uudist väikese tähega!")
        }
        if (uudiseRef.current.value.includes("  ")) {
            setSonum("Sisestasid kaks tühikut!")
        }
        
    }
  return (
    <div>
        <div>{sonum}</div>
        <label>Uudise nimi</label>
        <input onChange={kontroll} ref={uudiseRef} type="text" />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis