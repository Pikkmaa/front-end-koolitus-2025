import {useRef , useState } from 'react'

function LisaToode() {
    const [sonum, setSonum] = useState("Lisa Toode");
    const nimiRef = useRef();

    function lisa() {
        if(nimiRef.current.value === "") {
            setSonum("Tühja nimega ei saa toodet lisada!" );

        } else {
            setSonum("Toode lisatud!" + nimiRef.current.value );
        }
    }

  return (
    <div>
        <div> {sonum} </div>
        <label>Toote nimi</label> <br/>
        <input ref={nimiRef} type="text"></input> <br/>
        <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode