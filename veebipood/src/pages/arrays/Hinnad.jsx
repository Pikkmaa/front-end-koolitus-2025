import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Hinnad() {
    const [hinnad, setHinnad ] = useState([
        49.99,
        17.25,
        11.89,
        32.45,
        8.99,
        129.00,
        14.50,
        39.95,
        27.75,
        6.40
    ]);

    function reset() {
        setHinnad([
        49.99,
        17.25,
        11.89,
        32.45,
        8.99,
        129.00,
        14.50,
        39.95,
        27.75,
        6.40
    ]);
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
        <button onClick={reset}>Reset</button>
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