import { useRef, useState } from "react";
import tootedFailist from "../../data/tooted.json"
import HaldaHome from "./HaldaHome";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'


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
      if (tootedRef.current.value === "") {
      toast("Toote nimi ei tohi olla tühi");
      return;
      }
      if (hindRef.current.value === "" ) {
      toast("Tootel peab olema hind!");
      return;
      }
      if (hindRef.current.value <= 0) {
      toast("Hind ei tohi olla negatiivne!");
      return;
      }
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
      <div className="vorm">
        <label>Toote nimi</label>
        <input ref={tootedRef} type="text"/>

        <label>Toote hind</label>
        <input ref={hindRef} type="number"/>

        <label>Toote pilt</label>
        <input ref={piltRef} type="text" />

        <label>Toode aktiivne</label>
        <input ref={aktiivneRef} type="checkbox" />
        <button onClick={lisa}>Sisesta</button>
        </div>

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
              <th>Muuda</th>
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
                <td className="redigeeri-nupp" >
                  <Link to={"/muuda-toode/" + toode.nimi}>
                    <img src="/edit.svg" alt="" />
                </Link>
                </td>
                <td>
                  <button onClick={() => kustuta(index)}>x</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer/>
    </div>
  )
}

export default HaldaTooted