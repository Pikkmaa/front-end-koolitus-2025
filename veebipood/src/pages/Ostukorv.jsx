import { useState } from "react"
//import ostukorvFailist from '../data/ostukorv.json'

// renderdamine - esmakordselt lehele tulek, HTML-i välja näitamine, väga palju tööd, sest kuvab kogu HTML-i välja

// re-rendardamine - setteri käivitamine (praegu setTooted()). läheb uuesti HTML-i vaatama ehk uuendamma, aga
// kõik elemendid on tal mälus ehk tegemist on efektiivse vaatamisega. ainuke asi, mis mälus pole, on tsükkel
// sest tsükkel on Javascript ja see on muutuvas seisundis - seega peame key={} abil tsükli sisus oleva
// HTML-i elemendi meelde jätma (et React ei peaks uuesti seda renderdama)


function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || [] );

  function kustuta(index) {
    tooted.splice(index,1);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  function tyhjenda() {
    tooted.splice(0);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  function arvutaKokku() {
    let sum = 0;
    tooted.forEach(toode => sum = sum + toode.hind);
    return sum;
  }


  return (
  <div>
    {tooted.length > 0 &&
      <div>
        <button onClick={tyhjenda} >Tühjenda</button>
        <div>Ostukorvis on {tooted.length} toodet</div>
      </div>
    }

      {tooted.length === 0 && <div>Ostukorv on tühi</div>}
      {tooted.map((toode, index) =>
      <div key={toode.nimi}>
        {toode.nimi} - {toode.hind}
        <button onClick={() => kustuta(index)}>x</button>
        </div> )}
        {tooted.length > 0 && <div>Ostukorvi kogu summa: {arvutaKokku()} €</div>}
  </div>
  )
}

export default Ostukorv