import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Tootajad() {
    const [tootajad, setTootajad] = useState([
        "Anna",
        "Tom",
        "Katrin",
        "Marek",
        "Maarja Liis",
        "Jan", 
        "Evelin", 
        "Mart", 
        "Grete",
        "Karl Martin"
    ]);
    function reset() {
        setTootajad([
        "Anna",
        "Tom",
        "Katrin",
        "Marek",
        "Maarja Liis",
        "Jan", 
        "Evelin", 
        "Mart", 
        "Grete",
        "Karl Martin"
    ]);
    }
    function sorteeriAZ() {
        tootajad.sort((a, b) => a.localeCompare(b));
        setTootajad(tootajad.slice());
    }
    function sorteeriZA() {
        tootajad.sort((a, b) => b.localeCompare(a));
        setTootajad(tootajad.slice());
    }
    function sorteeriTahedKasvavalt() {
        tootajad.sort((a, b) => a.length - b.length);
        setTootajad(tootajad.slice());
    }

    function sorteeriTahedKahanevalt() {
        tootajad.sort((a, b) => b.length - a.length);
        setTootajad(tootajad.slice());
    }
    function sorteeriTeineTahtAZ() {
        tootajad.sort((a, b) => a[1].localeCompare(b[1]));
        setTootajad(tootajad.slice());
    }
    function sorteeriSonaArvuJargi() {
        tootajad.sort((a, b) => b.split(" ").length - a.split(" ").length);
        setTootajad(tootajad.slice());
    }


    function filtreeriKolmetahelised() {
        const vastus = tootajad.filter(tootaja => tootaja.length === 3);
        setTootajad(vastus);
    }

    function filtreeriRohkemkuiViietahelised() {
        const vastus = tootajad.filter(tootaja => tootaja.length > 5);
        setTootajad(vastus);
    }

    function filtreeriRTsisaldavad() {
        const vastus = tootajad.filter(tootaja => tootaja.includes("rt"));
        setTootajad(vastus);
    }

    function filtreeriNeljasR() {
        const vastus = tootajad.filter(tootaja => tootaja[3] === "r");
        setTootajad(vastus);
    }

    function filtreeriMgaAlgavad() {
        const vastus = tootajad.filter(tootaja => tootaja.startsWith("M"));
        setTootajad(vastus);
    }

    function filtreeriPaarisArvTahti() {
        const vastus = tootajad.filter(tootaja => {
            const tahed = tootaja.toLowerCase().replaceAll(" ", "");
            for (let i = 0; i < tahed.length -1; i++) {
                if (tahed[i] === tahed[i + 1]) {
                    return true;
                }
            }
            return false;
        });
        setTootajad(vastus);
    }

  return (
    <div>
        <ArraysHome />
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
        <div>{tootajad.map(tootaja => <div key={tootaja}>{tootaja}</div>)} </div>
    </div>
  )
}

export default Tootajad
