import { useState } from "react"
import joogidFailist from '../joogid.json'

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);

    function kustuta(index) {
        joogidFailist.splice(index,1);
        uuendaJoogid(joogid.slice());
    }
    
  return (
    <div>
        <div>{joogid.map((jook, index) =>
          <div>
            <span> {jook}</span>
            <button onClick={() =>kustuta(index)}>x</button>
            </div>)}
        </div>
    </div>
  )
}

export default HaldaJooke