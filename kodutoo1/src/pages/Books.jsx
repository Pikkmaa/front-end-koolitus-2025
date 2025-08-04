import { useState } from "react";

function Books() {
    const [books, setBooks] = useState(["The Great Gatsby","War and Peace","Hamlet","Moby Dick","Anna Karenina","Little Prince"]);
    function reset() {
        setBooks(["The Great Gatsby","War and Peace","Hamlet","Moby Dick","Anna Karenina","Little Prince"])
    }


    function sorteeriAZ() {
        books.sort((a, b) => a.localeCompare(b));
        setBooks(books.slice());   
    }

    function sorteeriZA () {
        books.sort((a, b) => b.localeCompare(a));
        setBooks(books.slice());
    }

    function sorteeriTahedKasvavalt() {
        books.sort((a, b) => a.length - b.length);
        setBooks(books.slice());  
    }


    function sorteeriTeineTahtAZ() {
        books.sort((a, b) => a[2].localeCompare(b[2]));
        setBooks(books.slice());
    }

    function sorteeriEelviimaneTahtAZ() {
        books.sort((a, b) => {
        const aChar = a.charAt(a.length - 2) || '';
        const bChar = b.charAt(b.length - 2) || '';
        return aChar.localeCompare(bChar);     
        });
        setBooks(books.slice());
    }

    function sorteeriSonadeArvAZ() {
        books.sort((a, b) => b.split(" ").length - a.split(" ").length);
        setBooks(books.slice());
    }

    function filtreeriLyhenditTheSisaldavad() {
        const vastus = books.filter(book => book.includes("The"));
        setBooks(vastus);
    }

    function filtreeriLyhenditAndSisaldavad() {
        const vastus = books.filter(book => book.includes("and"));
        setBooks(vastus);
    }

    function filtreeriPikemadKui10() {
        const vastus = books.filter(book => book.length > 10);
        setBooks(vastus);
    }

    function filtreeriVaiksemadKui7() {
        const vastus = books.filter(book => book.length < 7);
        setBooks(vastus);
    }

    function filtreeriRohkemKuiKolmSona() {
        const vastus = books.filter(book => book.trim().split(/\s+/).length >= 3);
        setBooks(vastus);
    }

    function filtreeriCloppev() {
        const vastus = books.filter(book => book.endsWith("c"));
        setBooks(vastus);
    }
  return (
    <div>
        <button onClick={reset}>Reset</button>

        <button onClick={sorteeriAZ}>Sorteeri AZ</button>
        <button onClick={sorteeriZA}>Sorteeri ZA</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTeineTahtAZ}>Sorteeri kolmas täht AZ</button>
        <button onClick={sorteeriSonadeArvAZ}>Sorteeri sõnade arvu järgi AZ</button>
        <button onClick={sorteeriEelviimaneTahtAZ}>Sorteeri eelviimane täht AZ</button>

        <br />
        <br />

        <button onClick={filtreeriLyhenditTheSisaldavad}>Filtreeri The-d sisaldavad</button>
        <button onClick={filtreeriLyhenditAndSisaldavad}>Filtreeri And-d sisaldavad</button>
        <button onClick={filtreeriPikemadKui10}>Filtreeri pikemad kui 10</button>
        <button onClick={filtreeriVaiksemadKui7}>Filtreeri väiksemad kui 7</button>
        <button onClick={filtreeriRohkemKuiKolmSona}>Jäta alles rohkem, kui kolme sõnalised</button>
        <button onClick={filtreeriCloppev}>Jäta C-ga lõppevad</button>
        <div>{books.map(book => <div key={book}>{book}</div>)} </div>
    </div>
  )
}

export default Books