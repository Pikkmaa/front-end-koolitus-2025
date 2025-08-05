import {useRef , useState } from 'react'
import tootedFailist from '../data/tooted.json'

function LisaToode() {
    const [sonum, setSonum] = useState("Lisa Toode");
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

    function lisa() {
        if(nimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa toodet lisada!" );

        } else {
            setSonum("Toode lisatud!" + nimiRef.current.value );
        }
        tootedFailist.push({
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "aktiivne": aktiivneRef.current.checked,
        "pilt": piltRef.current.value
    });
}

return (
    <div>
        <div> {sonum} </div>
        <label>Toote nimi</label>
        <input ref={nimiRef} type="text" /> <br />

        <label>Toote hind</label>
        <input ref={hindRef} type="number" /> <br />

        <label>Toote pilt</label>
        <input ref={piltRef} type="text" /> <br/>

        <label>Toode aktiivne</label>
        <input ref={aktiivneRef} type="checkbox" /> <br />

        <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode