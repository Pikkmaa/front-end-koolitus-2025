import { useState } from "react";
import ArraysHome from "./ArraysHome";

function Kasutajad() {
    const [kasutajad, setKasutajad] = useState([
        "pixelFox",
        "lunaCoder",
        "shadowWolf7",
        "greenLeaf88",
        "novaByte",
        "silentEcho",
        "blueComet",
        "midnightOwl",
        "codeWizard",
        "frozenLynx"
    ]);

    function reset() {
        setKasutajad([
        "pixelFox",
        "lunaCoder",
        "shadowWolf7",
        "greenLeaf88",
        "novaByte",
        "silentEcho",
        "blueComet",
        "midnightOwl",
        "codeWizard",
        "frozenLynx"
    ]);
    }

    function sorteeriAZ() {
        kasutajad.sort((a, b) => a.localeCompare(b));
        setKasutajad(kasutajad.slice());
    }
    function sorteeriZA() {
        kasutajad.sort((a, b) => b.localeCompare(a));
        setKasutajad(kasutajad.slice());
    }
    function sorteeriTahedKasvavalt() {
        kasutajad.sort((a, b) => a.length - b.length);
        setKasutajad(kasutajad.slice());
    }

    function sorteeriTahedKahanevalt() {
        kasutajad.sort((a, b) => b.length - a.length);
        setKasutajad(kasutajad.slice());
    }
    function sorteeriTeineTahtAZ() {
        kasutajad.sort((a, b) => a[1].localeCompare(b[1]));
        setKasutajad(kasutajad.slice());
    }


    function filtreeriKumnetahelised() {
        const vastus = kasutajad.filter(kasutaja => kasutaja.length <= 10);
        setKasutajad(vastus);
    }

    function filtreeriTapseltKuuetahelised() {
        const vastus = kasutajad.filter(kasutaja => kasutaja.length === 6);
        setKasutajad(vastus);
    }

    function filtreeriSgaAlgavaid() {
        const vastus = kasutajad.filter(kasutaja => kasutaja.startsWith("s"));
        setKasutajad(vastus);
    }

    function filtreeriXgaloppevaid() {
        const vastus = kasutajad.filter(kasutaja => kasutaja.endsWith("x"));
        setKasutajad(vastus);
    }




  return (
    <div>
        < ArraysHome />
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
        <div>{kasutajad.map(kasutaja => <div key={kasutaja}>{kasutaja}</div>)} </div>

    </div>
  )
}

export default Kasutajad

