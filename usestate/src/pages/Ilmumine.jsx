import { useState } from "react"

function Ilmumine() {
    const [lisainfo, setLisainfo] = useState(false);

  return (
    <div>
        <div onClick={() => setLisainfo(!lisainfo)} >
            Sooduskoodi sistamine ja makse arvutuskäik
            {lisainfo === true && <span>A</span>}
            {lisainfo === false && <span>V</span>}
        </div>
        {lisainfo === true && <div>Tellitavad tooted ja teenused
            Lisatud teenused
            Family pakett
            Soodustus kuni 29.03.2023
            0,00 €/kuu

            39,00 €/kuu

            Sisaldub paketis
            Fox NOW

            Sisaldub paketis
            HBO

            Sisaldub paketis
            Salvestamine

        </div> }
    </div>
  )
}

export default Ilmumine