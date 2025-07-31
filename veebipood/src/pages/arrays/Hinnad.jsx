import { useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from '../../data/hinnad.json'

function Hinnad() {
    const [hinnad, setHinnad ] = useState(hinnadFailist.slice());

    function reset() {
        setHinnad(hinnadFailist.slice());
    }

    function sorteeriKasvavalt() {
        hinnad.sort((a, b) => a - b);
        setHinnad(hinnad.slice());
        
    }

    function sorteeriKahanevalt () {
        hinnad.sort((a, b) => b - a);
        setHinnad(hinnad.slice());
        
    }


    function filtreeriVaiksemadKui50 () {
        const vastus = hinnad.filter(hind => hind < 50);
        setHinnad(vastus);
    }

    function filtreeriSuuremadKui30 () {
        const vastus = hinnad.filter(hind => hind > 30);
        setHinnad(vastus);
    }

  return (
    <div>
        < ArraysHome />
        <button onClick={reset}>Reseti fitrid</button>
        <br /> <br />

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>

        <br /> <br />
        <button onClick={filtreeriVaiksemadKui50} >Filtreeri väiksemad kui 50</button>
        <button onClick={filtreeriSuuremadKui30} >Filtreeri suuremad kui 30</button>

        {hinnad.map(hind => <div key={hind}>{hind.toFixed(2)}</div> )}

    </div>
  )
}

export default Hinnad