import { useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from '../../data/hinnad.json'
import { useRef } from "react";
import {Link} from 'react-router-dom'


// FAILI: {"number"}

function Hinnad() {
    const [hinnad, setHinnad ] = useState(hinnadFailist.slice());
    const otsingRef = useRef();

    function reset() {
        setHinnad(hinnadFailist.slice());
    }

    function sorteeriKasvavalt() {
        hinnad.sort((a, b) => a.number - b.number);
        setHinnad(hinnad.slice());
        
    }

    function sorteeriKahanevalt () {
        hinnad.sort((a, b) => b.number - a.number);
        setHinnad(hinnad.slice());
        
    }


    function filtreeriVaiksemadKui50 () {
        const vastus = hinnadFailist.filter(hind => hind.number < 50);
        setHinnad(vastus);
    }

    function filtreeriSuuremadKui30 () {
        const vastus = hinnadFailist.filter(hind => hind.number > 30);
        setHinnad(vastus);
    }

    function arvutaKokku() {
        let sum = 0;
        //sum = sum + 17.25;
        hinnad.forEach(hind => sum = sum + hind.number);
/*         for (let index = 0; index < hinnad.length; index++) {
            sum = sum + hinnad[index]. number;
            
        } */

        return sum;
    }

    function otsi() {
        const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
    setHinnad(vastus);
    }

  return (
    <div>
        < ArraysHome />
        <input onChange={otsi} ref={otsingRef} type="text" />
        <button onClick={reset}>Reseti fitrid</button>
        <br /> <br />

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>

        <br /> <br />
        <button onClick={filtreeriVaiksemadKui50} >Filtreeri väiksemad kui 50</button>
        <button onClick={filtreeriSuuremadKui30} >Filtreeri suuremad kui 30</button>

        {hinnad.map(hind => <div key={hind.number}>{hind.number.toFixed(2)}
            <Link to={"/yks-hind/" + hind.number}>
            <button>Vaata lähemalt</button>
        </Link>
        </div> )}

        <div>Hinnad kokku: {arvutaKokku().toFixed(2)} €</div>

    </div>
  )
}

export default Hinnad