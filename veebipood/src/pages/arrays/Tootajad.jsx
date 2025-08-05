import { useState } from "react"
import ArraysHome from "./ArraysHome"
import { useRef } from "react";
import tootajadFailist from '../../data/tootajad.json'
import {Link} from 'react-router-dom'


function Tootajad() {
    const otsingRef = useRef();
    
    const [tootajad, setTootajad] = useState(tootajadFailist);
    function reset() {
        setTootajad(tootajadFailist);
    }
    function sorteeriAZ() {
        tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi));
        setTootajad(tootajad.slice());
    }
    function sorteeriZA() {
        tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi));
        setTootajad(tootajad.slice());
    }
    function sorteeriTahedKasvavalt() {
        tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
        setTootajad(tootajad.slice());
    }

    function sorteeriTahedKahanevalt() {
        tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
        setTootajad(tootajad.slice());
    }
    function sorteeriTeineTahtAZ() {
        tootajad.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
        setTootajad(tootajad.slice());
    }
    function sorteeriSonaArvuJargi() {
        tootajad.sort((a, b) => b.nimi.split(" ").length - a.nimi.split(" ").length);
        setTootajad(tootajad.slice());
    }


    function filtreeriKolmetahelised() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length === 3);
        setTootajad(vastus);
    }

    function filtreeriRohkemkuiViietahelised() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length > 5);
        setTootajad(vastus);
    }

    function filtreeriRTsisaldavad() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes("rt"));
        setTootajad(vastus);
    }

    function filtreeriNeljasR() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.nimi[3] === "r");
        setTootajad(vastus);
    }

    function filtreeriMgaAlgavad() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.startsWith("M"));
        setTootajad(vastus);
    }

    function filtreeriPaarisArvTahti() {
        const vastus = tootajadFailist.filter(tootaja => {
            const tahed = tootaja.nimi.toLowerCase().replaceAll(" ", "");
            for (let i = 0; i < tahed.length -1; i++) {
                if (tahed[i] === tahed[i + 1]) {
                    return true;
                }
            }
            return false;
        });
        setTootajad(vastus);
    }

    function otsi() {
        const vastus = tootajadFailist.filter(tootaja =>
            tootaja.nimi.toLocaleLowerCase().includes(otsingRef.current.value.toLocaleLowerCase())
        );
        setTootajad(vastus)
    }

  return (
    <div>
        <ArraysHome />
        <input onChange={otsi} ref={otsingRef} type="text" />
        <button onClick={reset} >Reset</button>
        <br /> <br />
        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht AZ</button>
        <button onClick={sorteeriSonaArvuJargi}>Sorteeri sõna arvu järgi</button>

        <br /> <br />

        <button onClick={filtreeriKolmetahelised}>Näita kolmetähelisi</button>
        <button onClick={filtreeriRohkemkuiViietahelised}>Näita suuremaid kui viietähelised</button>
        <button onClick={filtreeriRTsisaldavad}>Näita rt lühendiga</button>
        <button onClick={filtreeriNeljasR}>Näita neljas täht R</button>
        <button onClick={filtreeriMgaAlgavad}>Näita M-ga algavaid</button>
        <button onClick={filtreeriPaarisArvTahti}>Näita kõrvuti kaks sama tähte</button>
    
        <div>Meil on {tootajad.length} töötajat!</div>
        <div>{tootajad.map(tootaja => <div key={tootaja.nimi}>{tootaja.nimi}
            <Link to={"/yks-tootaja/" + tootaja.nimi}>
                <button>Vaata lähemalt</button>
            </Link>
        </div>)} </div>
    </div>
  )
}

export default Tootajad


// FAILIS: nimi, vanus, ametikoht