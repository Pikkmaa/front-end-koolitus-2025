import { useState } from "react"

// renderdamine - esmakordselt lehele tulek, HTML-i välja näitamine, väga palju tööd, sest kuvab kogu HTML-i välja

// re-rendardamine - setteri käivitamine (praegu setTooted()). läheb uuesti HTML-i vaatama ehk uuendamma, aga
// kõik elemendid on tal mälus ehk tegemist on efektiivse vaatamisega. ainuke asi, mis mälus pole, on tsükkel
// sest tsükkel on Javascript ja see on muutuvas seisundis - seega peame key={} abil tsükli sisus oleva
// HTML-i elemendi meelde jätma (et React ei peaks uuesti seda renderdama)


function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);
  return (
  <div>
    {tooted.length > 0 &&
      <div>
        <button onClick={() => setTooted([])} >Tühjenda</button>
        <div>Ostukorvis on {tooted.length} toodet</div>
      </div>
    }

      {tooted.length === 0 && <div>Ostukorv on tühi</div>}
      {tooted.map(toode => <div key={toode}>{toode}</div> )}
  </div>
  )
}

export default Ostukorv