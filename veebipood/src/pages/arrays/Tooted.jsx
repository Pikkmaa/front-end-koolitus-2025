import { useState } from "react";
import ArraysHome from "./ArraysHome"

function Tooted() {
    const [tooted, setTooted] = useState([
        "Coca",
        "Fanta",
        "Sprite",
        "Vichy",
        "Red Bull",
        "Aura", 
        "Moster Energy", 
        "VitaWell", 
        "Limpa",
        "Miranda"
    ]);

    function reset() {
        setTooted([
        "Coca",
        "Fanta",
        "Sprite",
        "Vichy",
        "Red Bull",
        "Aura", 
        "Moster Energy", 
        "VitaWell", 
        "Limpa",
        "Miranda"
    ]);
    }

    function sorteeriAZ() {
        tooted.sort((a, b) => a.localeCompare(b));
        setTooted(tooted.slice());
    }
    function sorteeriZA() {
        tooted.sort((a, b) => b.localeCompare(a));
        setTooted(tooted.slice());
    }
    function sorteeriTahedKasvavalt() {
        tooted.sort((a, b) => a.length - b.length);
        setTooted(tooted.slice());
    }

    function sorteeriTahedKahanevalt() {
        tooted.sort((a, b) => b.length - a.length);
        setTooted(tooted.slice());
    }
    function sorteeriTeineTahtAZ() {
        tooted.sort((a, b) => a[1].localeCompare(b[1]));
        setTooted(tooted.slice());
    }


    function filtreeriKuuetahelised() {
        const vastus = tooted.filter(toode => toode.length <= 6);
        setTooted(vastus);
    }

    function filtreeriTapseltKuuetahelised() {
        const vastus = tooted.filter(toode => toode.length === 6);
        setTooted(vastus);
    }

    function filtreeriAgaloppevaid() {
        const vastus = tooted.filter(toode => toode.endsWith("a"));
        setTooted(vastus);
    }

    function filtreeriYgaloppevaid() {
        const vastus = tooted.filter(toode => toode.endsWith("a"));
        setTooted(vastus);
    }

    function filtreeriPaarisArvTahti() {
        const vastus = tooted.filter(toode => {
            const tahed = toode.toLowerCase().replaceAll(" ", "");
            for (let i = 0; i < tahed.length -1; i++) {
                if (tahed[i] === tahed[i + 1]) {
                    return true;
                }
            }
            return false;
        });
        setTooted(vastus);
    }

  return (
    <div>
        < ArraysHome />
        <button onClick={reset} >Reset</button>
        <br /> <br />
        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht AZ</button>

        <br /> <br />

        <button onClick={filtreeriKuuetahelised}>Näita kuni kuuetähelisi</button>
        <button onClick={filtreeriTapseltKuuetahelised}>Näita täpselt kuuetähelisi</button>
        <button onClick={filtreeriAgaloppevaid}>Näita a-ga lõppevaid</button>
        <button onClick={filtreeriYgaloppevaid}>Näita Y-ga lõppevaid</button>
        <button onClick={filtreeriPaarisArvTahti}>Näita kõrvuti kaks sama tähte</button>
    
        <div>Meil on {tooted.length} toodet!</div>
        <div>{tooted.map(toode => <div key={toode}>{toode}</div>)} </div>




    </div>
  )
}

export default Tooted
