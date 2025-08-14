import { useState } from "react"

function Meist() {
  const [kontakt, showKontakt] = useState("");
  const [valitud, setValitud] = useState("");
  const [sonum, setSonum] = useState("Vali mõni tegevus")

  function v6taYhendust(tootaja) {
    showKontakt(tootaja.telefon);
    setValitud(tootaja.nimi);

  }
  const tootajad = [
    {"nimi": "Arvo", "ala": "Muusika", "telefon": "Täpsustamisel"},
    {"nimi": "Kelly", "ala": "Reporter", "telefon": "Täpsustamisel"},
    {"nimi": "Edward", "ala": "Kujundus", "telefon": "Täpsustamisel"},
    {"nimi": "Kerly", "ala": "Välisturundus", "telefon": "Täpsustamisel"},
    {"nimi": "Madis", "ala": "Arendaja", "telefon": "Täpsustamisel"}
  ]
  return (
    <div>
      <div >{tootajad.map(tootaja =>
          <div className={tootaja.nimi === valitud ? "valitud": undefined}>
            {tootaja.nimi} {tootaja.ala}
            <button onClick={()=> v6taYhendust(tootaja)} >Võta ühendust</button>
            </div>)}
        </div>
   {/*  <div>See on meist leht, nähtav localhost:5173 aadressil</div>
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
    <br /> */}

   { kontakt !== "" && <div>Tema kontakt: {kontakt} </div>} <br />

   <div>{sonum}</div>
   <button onClick={() => setSonum("Selleks saada meile email jobs@html-css.com")} >Kandideeri tööle</button>
   <button onClick={() => setSonum("Meil on 10 töötajat kelle info lehel ilmub peagi")} >Vaata meie töötajaid</button>
   <button onClick={() => setSonum("Ühenduse võtmikseks, mine lehele Kontakt")} >Võta meiega ühendust</button>


    </div>
  )
}

export default Meist