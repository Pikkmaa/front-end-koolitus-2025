import { useState } from "react";

function Numbrid() {
    const [numbrid, setNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135]);
    function reset() {
        setNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135])
    }


    function sorteeriAZ() {
        numbrid.sort((a, b) => a - b);
        setNumbrid(numbrid.slice());   
    }

    function sorteeriZA () {
        numbrid.sort((a, b) => b - a);
        setNumbrid(numbrid.slice());
    }

    function sorteeriEsimeneNrAZ() {
        numbrid.sort((a, b) => a.toString().localeCompare(b.toString()));
        setNumbrid(numbrid.slice());   
    }

    function sorteeriEsimeneNrZA () {
        numbrid.sort((a, b) => b.toString().localeCompare(a.toString()));
        setNumbrid(numbrid.slice());
    }

    function filtreeriSuuremadKui8() {
    const vastus = numbrid.filter(num => num > 8);
    setNumbrid(vastus);
}

function filtreeriVäiksemadKui10() {
    const vastus = numbrid.filter(num => num < 10);
    setNumbrid(vastus);
}

function filtreeriPaarisArvud() {
    const vastus = numbrid.filter(num => num % 2 === 0);
    setNumbrid(vastus);
}

function filtreeripaaritudArvud() {
    const vastus = numbrid.filter(num => num % 2 !== 0);
    setNumbrid(vastus);
}

function filtreeriYhegaAlgavad() {
    const vastus = numbrid.filter(num => num.toString().startsWith('1'));
    setNumbrid(vastus);
}

function filtreeriSisasldavadKolme() {
    const vastus = numbrid.filter(num => num.toString().includes('3'));
    setNumbrid(vastus);
}

  return (
    <div>
        <button onClick={reset}>Reset</button>

        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriEsimeneNrAZ}>Sorteeri Esinumber AZ</button>
        <button onClick={sorteeriEsimeneNrZA}>Sorteeri Esinumber ZA</button>


        <br />
        <br />

        <button onClick={filtreeriSuuremadKui8}>Filtreeri suuremad kui 8</button>
        <button onClick={filtreeriVäiksemadKui10}>Filtreeri väiksemad kui 10</button>
        <button onClick={filtreeriPaarisArvud}>Filtreeri paaris arvud</button>
        <button onClick={filtreeripaaritudArvud}>Filtreeri paaritud arvud</button>
        <button onClick={filtreeriYhegaAlgavad}>Jäta 1-ga algavad</button>
        <button onClick={filtreeriSisasldavadKolme}>Jäta 3-ga numbrid</button>


        <div>{numbrid.map(number => <div key={number}>{number}</div>)} </div>
    </div>
  )
}
export default Numbrid