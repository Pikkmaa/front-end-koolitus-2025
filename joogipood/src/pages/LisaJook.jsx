import { useState } from "react";
import { useRef } from "react";
import joogidFailist from '../joogid.json'

function LisaJook() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);
    const jookRef = useRef();
    
    function lisaUusJook() {
        joogidFailist.push(jookRef.current.value);
        uuendaJoogid(joogid.slice());
    }
  return (
    <div>
        <label>Lisa uus jook</label>
        <input ref={jookRef} type="text" />
        <button onClick={lisaUusJook}>Lisa</button>
    </div>
  )
}

export default LisaJook