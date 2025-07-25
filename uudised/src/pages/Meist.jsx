import { useState } from "react"

function Meist() {
  const [kontakt, showKontakt] = useState("");
  const [sonum, setSonum] = useState("Vali mõni tegevus")
  return (
    <div>
    <div>See on meist leht, nähtav localhost:5173 aadressil</div>
    <br />

    <div>Meil on kontrollitud allikad</div>
    <div>Me ei loobi tühje sõnu</div>
    <div>Leiad uudise,mis ei vasta töele</div>
    <br />

    <div>Teavita koheselt meie peatoimetajat</div>
    <div>email: rein.rebane@uudised.ee</div>
    <button onClick={() => showKontakt('90034502')} >Võta ühendust</button>
    <br />

    <div>Uudised mida võid usaldada</div>
    <div>Saada oma vihje aadressile</div>
    <div>email: vihjed@uudised.ee</div>
    <button onClick={() => showKontakt('900 237 06')}>Võta ühendust</button>
    <br />

   { kontakt !== "" && <div>Tema kontakt: {kontakt} </div>} <br />

   <div>{sonum}</div>
   <button onClick={() => setSonum("Selleks saada meile email jobs@html-css.com")} >Kandideeri tööle</button>
   <button onClick={() => setSonum("Meil on 10 töötajat kelle info lehel ilmub peagi")} >Vaata meie töötajaid</button>
   <button onClick={() => setSonum("Ühenduse võtmikseks, mine lehele Kontakt")} >Võta meiega ühendust</button>


    </div>
  )
}

export default Meist