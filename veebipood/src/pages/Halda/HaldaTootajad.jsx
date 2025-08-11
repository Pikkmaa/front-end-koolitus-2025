import { useState } from "react";
import HaldaHome from "./HaldaHome";
import tootajadFailist from '../../data/tootajad.json'
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from "react";
import {Link} from 'react-router-dom'
function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist);
  const nimiRef = useRef();
  const vanusRef = useRef();
  const ametRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      toast("Töötaja nimi ei tohi olla tühi");
      return;
    }
    if (vanusRef.current.value === "") {
      toast("Palun lisa töötaja vanus!");
      return;
    }
    if (ametRef.current.value === "") {
      toast("Töötajal peab olema amet!");
      return;
    }
    tootajadFailist.push({
      "nimi": nimiRef.current.value,
      "vanus": vanusRef.current.value,
      "ametikoht": ametRef.current.value
    });
    setTootajad(tootajadFailist.slice());
    toast("Uus töötaja edukalt lisatud!");
  }
    function kustuta(index) {
    tootajadFailist.splice(index,1);
    setTootajad(tootajadFailist.slice());
  }
  return (
    <div>
      <HaldaHome />
      <div className="vorm">
      <label>Kasutajanimi</label>
        <input ref={nimiRef} type="text" />

        <label>Email</label>
        <input ref={vanusRef} type="number" />

        <label>Parool</label>
        <input ref={ametRef} type="text" />

        <button onClick={lisa}>Sisesta</button>
        </div>

        <div>Kasutajate arv: {tootajad.length} tk.</div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Nimi</th>
                    <th>Vanus</th>
                    <th>Amet</th>
                    <th>Muuda</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {tootajad.map((tootaja, index) =>
                <tr key={tootaja.nimi}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{tootaja.nimi}</td>
                    <td>{tootaja.vanus}</td>
                    <td>{tootaja.ametikoht}</td>
                    <td className="redigeeri-nupp">
                      <Link to={"/muuda-tootaja/" + index}>
                      <img src="/edit.svg" alt="" />
                      </Link>
                    </td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
      <ToastContainer/>
    </div>
  )
}

export default HaldaTootajad