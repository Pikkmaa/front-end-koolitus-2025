import { useState } from "react"

function LisaArvuti() {
    const [sonum, setSonum] = useState("Lisa arvuti");


  return (
    <div>
        <div>Sõnum: {sonum} </div>
        <label>Mark</label> <br />
        <input type="text" /> <br />
        <label>Mudel</label> <br />
        <input type="text"/> <br />
        <label>Maksumus</label> <br />
        <input type="number" /> <br />
        {sonum === "Lisa arvuti" && <button onClick={() => setSonum("Lisatud")} >Sisesta</button>}
    </div>
  )
}

export default LisaArvuti