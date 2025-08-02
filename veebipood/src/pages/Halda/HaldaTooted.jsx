import { useRef, useState } from "react";
import tootedFailist from "../../data/tooted.json"
import HaldaHome from "./HaldaHome";


function HaldaTooted() {
    const [tooted, setTooted] = useState(tootedFailist.slice());
    const tootedRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

    function kustuta(index) {
        tootedFailist.splice(index,1); // mitmendat, mitu tükki.
        setTooted(tootedFailist.slice());
    }

    function lisa() {
        tootedFailist.push({
            "nimi": tootedRef.current.value,
            "hind": Number(hindRef.current.value),
            "aktiivne": aktiivneRef.current.checked,
            "pilt": piltRef.current.value
        });
        setTooted(tootedFailist.slice())
    }



  return (
    <div>
      <HaldaHome />
        <label>Toote nimi</label>
        <input ref={tootedRef} type="text" /> <br />

        <label>Toote hind</label>
        <input ref={hindRef} type="number" /> <br />

        <label>Toote pilt</label>
        <input ref={piltRef} type="text" /> <br/>

        <label>Toode aktiivne</label>
        <input ref={aktiivneRef} type="checkbox" /> <br />
        <button onClick={lisa}>Sisesta</button>

        <div>Toodete arv: {tooted.length} tk.</div>
        <table className="halda-tabel">
          <thead>
            <tr>
              <th>Järjekorranumber</th>
              <th>Index</th>
              <th>Toote nimi</th>
              <th>Toote hind</th>
              <th>Aktiivne</th>
              <th>Toote pilt</th>
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
            {tooted.map((toode, index) =>
              <tr key={toode.nimi}>
                <td>{index + 1}.</td>
                <td>{index}</td>
                <td>{toode.nimi}</td>
                <td>{toode.hind}</td>
                <td>{toode.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</td>
                <td>
                  <img className="halda-toote-pilt" src={toode.pilt} alt={toode.nimi} />
                </td>
                <td>
                  <button onClick={() => kustuta(index)}>x</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted