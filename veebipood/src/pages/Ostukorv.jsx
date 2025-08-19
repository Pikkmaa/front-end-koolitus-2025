import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"
import { useTranslation } from 'react-i18next';
import minus from '../assets/minus.png'
import plus from '../assets/plus-sign.png'
import remove from '../assets/x-mark.png'
//import ostukorvFailist from '../data/ostukorv.json'

// renderdamine - esmakordselt lehele tulek, HTML-i välja näitamine, väga palju tööd, sest kuvab kogu HTML-i välja

// re-rendardamine - setteri käivitamine (praegu setTooted()). läheb uuesti HTML-i vaatama ehk uuendamma, aga
// kõik elemendid on tal mälus ehk tegemist on efektiivse vaatamisega. ainuke asi, mis mälus pole, on tsükkel
// sest tsükkel on Javascript ja see on muutuvas seisundis - seega peame key={} abil tsükli sisus oleva
// HTML-i elemendi meelde jätma (et React ei peaks uuesti seda renderdama)


function Ostukorv() {
  const { t } = useTranslation();
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || [] );
  const [pakiautomaadid, setPakiautomaadid] = useState([]);
  const [dbpakiautomaadid, setDbPakiautomaadid] = useState([]);
  const [riik, setRiik] = useState("EE");
  const otsingRef = useRef();

  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
    .then(res => res.json())
    .then(json => {
      setPakiautomaadid(json);
      setDbPakiautomaadid(json);
    })
    
  }, []);

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
    tooted.forEach(toode => sum = sum + toode.product.hind * toode.quantity);
    return sum;
  }

  function otsi() {
    const vastus = dbpakiautomaadid
    .filter(automaat => automaat.NAME
      .includes(otsingRef.current.value));
    setPakiautomaadid(vastus);
  }

  function suurendaKogust(index) {
    tooted[index].quantity++;
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
    

  }

  function vahendaKogust(index) {
    tooted[index].quantity--;
    if (tooted[index].quantity === 0) {
      tooted.splice(index,1);
    }
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));

  }

  function arvutaKogusedKokku() {
    let sum = 0;
    tooted.forEach(toode => sum = sum + toode.quantity);
    return sum;
  }




  return (
  <div>
    {tooted.length > 0 &&
      <div>
        <button onClick={tyhjenda} >{t("cart.empty-button")}</button>
        <div>Ostukorvis on {tooted.length} erinevat toodet, kokku {arvutaKogusedKokku()} toodet</div>
      </div>
    }

      {tooted.length === 0 && <div>{t("cart.text")}</div>}
      {tooted.map((toode, index) =>
      <div className="toode" key={toode.nimi}>
        <div className="nimi" >{toode.product.nimi}</div> <br />
        <div className="hind" >{toode.product.hind}€</div> <br />
        <div className="kogus" >
          <img className= "ikoon" src={minus} onClick={() =>vahendaKogust(index)} alt="" />
          <div>{toode.quantity} tk</div>  <br />
          <img className= "ikoon" src={plus} onClick={() =>suurendaKogust(index)} alt="" />
        </div>
        <div className="kokku" >{(toode.product.hind * toode.quantity).toFixed(2)}€</div>  <br />
        <img className= "ikoon" src={remove} onClick={() => kustuta(index)} alt="" />
        </div> )}
        {tooted.length > 0 && <div>{t("cart.total")}: {arvutaKokku().toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</div>}

        <label>Otsi pakiautomaatide seast</label>
        <input onChange={otsi} ref={otsingRef} type="text" />


        <button onClick={() => setRiik("EE")}>Eesti</button>
        <button onClick={() => setRiik("LV")}>Läti</button>
        <button onClick={() => setRiik("LT")}>Leedu</button>



        <select>
          {pakiautomaadid
          .filter(automaat => automaat.A0_NAME === riik)
          .map(automaat => <option key={automaat.NAME}>{automaat.NAME}</option> )}
        </select>
  </div>
  )
}

export default Ostukorv