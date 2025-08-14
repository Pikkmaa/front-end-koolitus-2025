import { useState } from 'react'
import kasutajadFailist from '../users.json'


function Kasutajad() {
    const [kasutajad, setKasutajad] = useState(kasutajadFailist);

    function reset() {
    setKasutajad(kasutajadFailist);
  }

  function kuvaPikadKasutajanimed() {
    setKasutajad(
      kasutajadFailist.filter(kasutaja => kasutaja.username.length >= 10)
    );
  }

  function kuvaEsimeneC() {
    const leitud = kasutajadFailist.find(kasutaja =>
        kasutaja.name[0].toUpperCase() === "C");
    setKasutajad(leitud ? [leitud] : []);
  }

  function sorteeriLatJargi() {
    const sorted = [...kasutajadFailist].sort(function (a, b) {
      return parseFloat(a.address.geo.lat) - parseFloat(b.address.geo.lat);
    });
    setKasutajad(sorted);
  }

  function liidaId() {
    const summa = kasutajadFailist.reduce(function (acc, k) {
      return acc + k.id;
    }, 0);
    console.log("Kõikide kasutajate ID-de summa:", summa);
  }

  function kustuta(index) {
    kasutajadFailist.splice(index,1);
    setKasutajad(kasutajadFailist.slice());
  }
  return (
    <div>
        <div>Kuvatud on {kasutajad.length} kasutajat.</div>
        <button onClick={reset}>Reset</button>
        <button onClick={kuvaPikadKasutajanimed}>Kuva kõik kasutajad kelle kasutajanimi 10 või rohkem tähemärki</button>
        <button onClick={kuvaEsimeneC}>Kuva esimene kasutaja, kelle nimie esimene täht on C</button>
        <button onClick={sorteeriLatJargi}>Sorteeri kasutajad "lat" väärtuse järgi</button>
        <button onClick={liidaId}>Liida kokku kõkide kasutajate id-d consloe log'i</button>
        <div>
        {kasutajad.map((kasutaja, index) => <div key={kasutaja.id}>
            <div>{kasutaja.id}</div>
            <div>{kasutaja.name}</div>
            <div>{kasutaja.username}</div>
            <div>{kasutaja.address.geo.lat}</div>
            <button onClick={()=>kustuta(index)}>X</button>
            </div> )}
    </div>
    </div>
  )
}

export default Kasutajad