import { useRef } from "react"

function LisaUudis() {
    const uudiseRef = useRef();

    function lisaUusUudis() {
        const uudised = JSON.parse(localStorage.getItem("uudisedId")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudisedId", JSON.stringify(uudised));

    }
  return (
    <div>LisaUudis
        <label>Uudise nimi</label>
        <input ref={uudiseRef} type="text" />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis