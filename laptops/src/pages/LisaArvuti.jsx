import { useState } from "react"

function LisaArvuti() {
    const [sonum, setSonum] = useState("Lisa arvuti");
    const [n2itanuppu, setN2itanuppu] = useState(true);
    function addProduct() {
        setSonum("Arvuti lisatud!");
        setN2itanuppu(false);
    }


  return (
    <div>
        <div>Sõnum: {sonum}</div>
        <label>Mark</label> <br />
        <input type="text" /> <br />
        <label>Mudel</label> <br />
        <input type="text"/> <br />
        <label>Maksumus</label> <br />
        <input type="number" /> <br />
        {n2itanuppu === true && <button onClick={() => addProduct()} >Sisesta</button>}
    </div>
  )
}

export default LisaArvuti