import { useRef, useState } from "react";

function LisaTegelane() {
    const [sonum, setSonum ] = useState("");
    const nimiRef = useRef("")
    
    function lisaUusTegelane() {
        if(nimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa tegelast lisada!" );

        } else {
            setSonum("Tegelane lisatud!" + nimiRef.current.value );
        }
    }
  return (
    <div>
        <div> {sonum} </div>
        <label>Tegelase nimi</label> <br/>
        <input ref={nimiRef} type="text"></input> <br/>
        <button onClick={lisaUusTegelane}>Sisesta</button>
    </div>
  )
}

export default LisaTegelane