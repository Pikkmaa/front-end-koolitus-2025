import { useState } from "react"

function LisaTegelane() {
    const [sonum, setSonum ] = useState("");
  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label> <br />
        <input type="text" /> <br />
        <button onClick={() => setSonum("Tegelane lisatud!")} >Lisa uus</button> <br />
    </div>
  )
}

export default LisaTegelane