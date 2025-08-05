import { useRef, useState } from "react";
import ArraysHome from "./ArraysHome";
import kasutajadFailist from '../../data/kasutajad.json'
import {Link} from 'react-router-dom'

function Kasutajad() {
    const otsingRef = useRef();
    const [kasutajad, setKasutajad] = useState(kasutajadFailist);

    function reset() {
        setKasutajad(kasutajadFailist);
    }

    function sorteeriAZ() {
        kasutajad.sort((a, b) => a.kasutajanimi.localeCompare(b.kasutajanimi));
        setKasutajad(kasutajad.slice());
    }
    function sorteeriZA() {
        kasutajad.sort((a, b) => b.kasutajanimi.localeCompare(a.kasutajanimi));
        setKasutajad(kasutajad.slice());
    }
    function sorteeriTahedKasvavalt() {
        kasutajad.sort((a, b) => a.kasutajanimi.length - b.kasutajanimi.length);
        setKasutajad(kasutajad.slice());
    }

    function sorteeriTahedKahanevalt() {
        kasutajad.sort((a, b) => b.kasutajanimi.length - a.kasutajanimi.length);
        setKasutajad(kasutajad.slice());
    }
    function sorteeriTeineTahtAZ() {
        kasutajad.sort((a, b) => a.kasutajanimi[1].localeCompare(b.kasutajanimi[1]));
        setKasutajad(kasutajad.slice());
    }


    function filtreeriKumnetahelised() {
        const vastus = kasutajadFailist.filter(kasutaja => kasutaja.kasutajanimi.length <= 10);
        setKasutajad(vastus);
    }

    function filtreeriTapseltKuuetahelised() {
        const vastus = kasutajadFailist.filter(kasutaja => kasutaja.kasutajanimi.length === 6);
        setKasutajad(vastus);
    }

    function filtreeriSgaAlgavaid() {
        const vastus = kasutajadFailist.filter(kasutaja => kasutaja.kasutajanimi.startsWith("s"));
        setKasutajad(vastus);
    }

    function filtreeriXgaloppevaid() {
        const vastus = kasutajadFailist.filter(kasutaja => kasutaja.kasutajanimi.endsWith("x"));
        setKasutajad(vastus);
    }

    function otsi() {
        const vastus = kasutajadFailist.filter(kasutaja =>
            kasutaja.kasutajanimi.toLocaleLowerCase().includes(otsingRef.current.value.toLocaleLowerCase()));
        setKasutajad(vastus)
    }




  return (
    <div>
        < ArraysHome />
        <input onChange={otsi} ref={otsingRef} type="text" />
        <button onClick={reset} >Reset</button>
        <br /> <br />
        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht AZ</button>

        <br /> <br />

        <button onClick={filtreeriKumnetahelised}>Näita kuni kümnetähelisi</button>
        <button onClick={filtreeriTapseltKuuetahelised}>Näita täpselt kuuetähelisi</button>
        <button onClick={filtreeriSgaAlgavaid}>Näita S-ga algavaid</button>
        <button onClick={filtreeriXgaloppevaid}>Näita X-ga lõppevaid</button>
    
        <div>Meil on <strong>{kasutajad.length}</strong> registreerinud kasutajat!</div>
        <div>{kasutajad.map(kasutaja => <div key={kasutaja.kasutajanimi}>{kasutaja.kasutajanimi}
            <Link to={"/yks-kasutaja/" + kasutaja.kasutajanimi}>
            <button>Vaata lähemalt</button>
        </Link>
        </div>)} </div>

    </div>
  )
}

export default Kasutajad

// FAILIS; e-mail, kasutajanimi ja parool