import { useRef, useState } from 'react';
import tagasisisdeAndjad from '../nimed.json'

function TagasisideAndjad() {
    const [nimed, setNimed] = useState(tagasisisdeAndjad.slice());
    const nimiRef = useRef();
    
    function reset() {
        setNimed(tagasisisdeAndjad);
    }
    function kustuta(index) {
        nimed.splice(index,1);
        setNimed(nimed.slice());
    }

    function lisaUusNimi() {
    nimed.push(nimiRef.current.value);
    setNimed(nimed.slice())
  }

    function sorteeriZA() {
        nimed.sort((a, b) => b.localeCompare(a));
        setNimed(nimed.slice());
    }

    function filtreeriMTahega() {
        setNimed(nimed.filter(nimi => nimi.startsWith("M")));
    }

    function filtreeri6Kohalised() {
        setNimed(nimed.filter(nimi => nimi.length === 6));
    }

    function filtreeriYTahegaLoppevad() {
        setNimed(nimed.filter(nimi => nimi.endsWith("y")));
    }

    function lisaEstPrefix() {
        setNimed(nimed.map(nimi => "EST-" + nimi));
    }

  return (
    <div>
        <button onClick={reset} >Reset</button>
        <br /> <br />
 
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={filtreeriMTahega}>näita ainult M-ga algavaid</button>
        <button onClick={filtreeri6Kohalised}>näita ainult 6 tähemärgiga nimesid</button>
        <button onClick={filtreeriYTahegaLoppevad}>näita ainult Y-ga algavaid</button>
        <button onClick={lisaEstPrefix}>Lisa Est prefix</button>
    
        <div>Meil on <strong>{nimed.length}</strong> tagasisidestajat!</div>
        <div>{nimed.map((nimi , index) => <div key={nimi}>{nimi}
            <button onClick={() =>kustuta(index)}>x</button>
        </div>)} </div>
        <label>Lisa uus tagasiside</label>
        <input ref={nimiRef} type="text" />
        <button onClick={lisaUusNimi}>Lisa</button>
    </div>
  )
}

export default TagasisideAndjad