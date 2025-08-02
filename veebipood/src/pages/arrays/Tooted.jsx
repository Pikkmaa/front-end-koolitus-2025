import { useState } from "react";
import ArraysHome from "./ArraysHome"
import tootedFailist from "../../data/tooted.json"
import ostukorvFailist from '../../data/ostukorv.json'

function Tooted() {
    const [tooted, setTooted] = useState(tootedFailist);

    function reset() {
        setTooted(tootedFailist);
    }

    function sorteeriAZ() {
        tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
        setTooted(tooted.slice());
    }
    function sorteeriZA() {
        tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
        setTooted(tooted.slice());
    }
    function sorteeriTahedKasvavalt() {
        tooted.sort((a, b) => a.nimi.length - b.nimi.length);
        setTooted(tooted.slice());
    }

    function sorteeriTahedKahanevalt() {
        tooted.sort((a, b) => b.nimi.length - a.nimi.length);
        setTooted(tooted.slice());
    }
    function sorteeriTeineTahtAZ() {
        tooted.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
        setTooted(tooted.slice());
    }


    function filtreeriKuuetahelised() {
        const vastus = tooted.filter(toode => toode.nimi.length <= 6);
        setTooted(vastus);
    }

    function filtreeriTapseltKuuetahelised() {
        const vastus = tooted.filter(toode => toode.nimi.length === 6);
        setTooted(vastus);
    }

    function filtreeriAgaloppevaid() {
        const vastus = tooted.filter(toode => toode.nimi.endsWith("a"));
        setTooted(vastus);
    }

    function filtreeriYgaloppevaid() {
        const vastus = tooted.filter(toode => toode.nimi.endsWith("y"));
        setTooted(vastus);
    }

    function filtreeriPaarisArvTahti() {
        const vastus = tooted.filter(toode => {
            const tahed = toode.nimi.toLowerCase().replaceAll(" ", "");
            for (let i = 0; i < tahed.length -1; i++) {
                if (tahed[i] === tahed[i + 1]) {
                    return true;
                }
            }
            return false;
        });
        setTooted(vastus);
    }

    function lisaOstukorvi(toode) {
        ostukorvFailist.push(toode);
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
    
        <div>Nähtaval on {tooted.length} toodet</div>
        <div className="tooted-grid">
            {tooted.map(toode =>
                <div className="toote-kaart" key={toode}>
                <div className="toote-nimi">{toode.nimi}</div>
                <div className="toote-hind">{toode.hind} €</div>
                <img className="toote-pilt" src={toode.pilt} alt={toode.nimi} />
                {toode.aktiivne && (
                    <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
                )}
                </div>
            )}
        </div>
    </div>
  )
}

export default Tooted
