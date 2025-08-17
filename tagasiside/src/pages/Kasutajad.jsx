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

  function lisaTelefonAlgus() {
  const uued = kasutajad.map(kasutaja => ({
    ...kasutaja,
    phone: "000-" + kasutaja.phone
  }));
  setKasutajad(uued);
}

  function ainultEmailid() {
    const emailid = kasutajad.map(kasutaja => kasutaja.email);
    console.log("Emailide massiiv:", emailid);
  }

  function asendaCatchPhrase() {
  const uued = kasutajad.map(kasutaja => ({
    ...kasutaja,
    company: {
      ...kasutaja.company,
      catchPhrase: kasutaja.company.catchPhrase.replace(/a/g, "e")
    }
  }));
  setKasutajad(uued);
}

  return (
    <div>
        <div>Kuvatud on {kasutajad.length} kasutajat.</div>
        <button onClick={reset}>Reset</button>
        <button onClick={kuvaPikadKasutajanimed}>Kuva kõik kasutajad kelle kasutajanimi 10 või rohkem tähemärki</button>
        <button onClick={kuvaEsimeneC}>Kuva esimene kasutaja, kelle nimie esimene täht on C</button>
        <button onClick={sorteeriLatJargi}>Sorteeri kasutajad "lat" väärtuse järgi</button>
        <button onClick={liidaId}>Liida kokku kõkide kasutajate id-d consloe log'i</button>
        <button onClick={lisaTelefonAlgus}>Lisa 000- telefoni numbri ette</button>
        <button onClick={ainultEmailid}>ainult emailid console log'is</button>
        <button onClick={asendaCatchPhrase}>asenda tähed CatchPhrase'is</button>
        <div>
        {kasutajad.map((kasutaja, index) => <div key={kasutaja.id}>
            <div>{kasutaja.id}</div>
            <div>{kasutaja.name}</div>
            <div>{kasutaja.username}</div>
            <div>{kasutaja.email}</div>
            <div>{kasutaja.address.geo.lat}</div>
            <div>{kasutaja.address.geo.ing}</div>
            <div>{kasutaja.address.street}</div>
            <div>{kasutaja.address.suite}</div>
            <div>{kasutaja.address.city}</div>
            <div>{kasutaja.address.zipcode}</div>
            <div>{kasutaja.phone}</div>
            <div>{kasutaja.company.name}</div>
            <div>{kasutaja.company.catchPhrase}</div>
            <div>{kasutaja.company.bs}</div>
            <button onClick={()=>kustuta(index)}>X</button>
            </div> )}
    </div>
    </div>
  )
}

export default Kasutajad