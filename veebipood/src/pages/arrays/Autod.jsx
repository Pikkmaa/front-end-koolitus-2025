import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Autod() {
    const [autod, setAutod] = useState([
        "Toyota",
        "Ford",
        "Honda",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Chevrolet",
        "Hyundai",
        "Nissan",
        "Volkswagen"
    ]);

    function reset() {
        setAutod([
        "Toyota",
        "Ford",
        "Honda",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Chevrolet",
        "Hyundai",
        "Nissan",
        "Volkswagen"
    ]);
    }

    function sorteeriAZ() {
        autod.sort((a, b) => a.localeCompare(b));
        setAutod(autod.slice());   
    }

    function sorteeriZA () {
        autod.sort((a, b) => b.localeCompare(a));
        setAutod(autod.slice());
    }

    function sorteeriTahedKasvavalt() {
        autod.sort((a, b) => a.length - b.length);
        setAutod(autod.slice());  
    }

    function sorteeriTahedKahanevalt() {
        autod.sort((a, b) => b.length - a.length);
        setAutod(autod.slice());  
        
    }

    function sorteeriKolmasTahtAZ() {
        // autod.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
        //autod.sort((a, b) => a.at(2).localeCompare(b.at(2)));
        autod.sort((a, b) => a[2].localeCompare(b[2]));
        setAutod(autod.slice());
    }

    function filtreeriAgaLoppevad() {
        const vastus = autod.filter(auto => auto.endsWith("a"));
        setAutod(vastus);
    }

        function filtreeriLyhenditOLSisaldavad() {
        const vastus = autod.filter(auto => auto.includes("ol"));
        setAutod(vastus);
    }

        function filtreeriPikemadKui6() {
        const vastus = autod.filter(auto => auto.length > 6);
        setAutod(vastus);
    }

        function filtreeriTapselt6() {
        const vastus = autod.filter(auto => auto.length === 6);
        setAutod(vastus);
    }

        function filtreeriTeineTahtO() {
        const vastus = autod.filter(auto => auto[1] === "o");
        setAutod(vastus);
    }





  return (
    <div>
        <ArraysHome />
        <button onClick={reset}>Reset</button>
        <br /> <br />
        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht AZ</button>

        <br />
        <br />

        <button onClick={filtreeriAgaLoppevad}>filtreeri A-ga lõppevad</button>
        <button onClick={filtreeriLyhenditOLSisaldavad}>Filtreeri OL-i sisaldavad</button>
        <button onClick={filtreeriPikemadKui6}>Filtreeri pikemad kui 6</button>
        <button onClick={filtreeriTapselt6}>Filtreeri täpselt 6</button>
        <button onClick={filtreeriTeineTahtO}>Jäta alles kellel teine tähn O</button>
        



        <div>Nähtaval on {autod.length} autot</div>
        <div>{autod.map(auto => <div key={auto}>{auto}</div>)} </div>
    </div>
  )
}

export default Autod
