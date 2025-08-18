import { useRef, useState } from "react";

function LisaTegelane() {
    const [sonum, setSonum ] = useState("");
    const eesnimiRef = useRef("")
    const perenimiRef = useRef("")
    const aadressRef = useRef("")
    const vanusRef = useRef("")
    
    function lisaUusTegelane() {
        if(eesnimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa tegelast lisada!" );

        } else {
            setSonum("Tegelane lisatud!" + eesnimiRef.current.value );
            const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
            tegelased.push({
                "eesnimi": eesnimiRef.current.value,
                "perenimi": perenimiRef.current.value,
                "elukoht": aadressRef.current.value,
                "vanus": Number(vanusRef.current.value)
            })
            localStorage.setItem("tegelased", JSON.stringify(tegelased));
        }
    }
  return (
    <div>
        <div> {sonum} </div>
        <label>Tegelase eesnimi</label> <br/>
        <input ref={eesnimiRef} type="text"></input> <br/>
        <label>Tegelase perenimi</label> <br/>
        <input ref={perenimiRef} type="text"></input> <br/>
        <label>Tegelase aadress</label> <br/>
        <input ref={aadressRef} type="text"></input> <br/>
        <label>Tegelase vanus</label> <br/>
        <input ref={vanusRef} type="number"></input> <br/>
        <button onClick={lisaUusTegelane}>Sisesta</button>
    </div>
  )
}

export default LisaTegelane