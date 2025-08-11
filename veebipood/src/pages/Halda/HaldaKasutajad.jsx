import { useRef } from "react";
import HaldaHome from "./HaldaHome";
import kasutajadFailist from '../../data/kasutajad.json'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import {Link} from 'react-router-dom'
function HaldaKasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist);
  const nimiRef = useRef();
  const emailRef = useRef();
  const paroolRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      toast("Kasutajanimi ei tohi olla tühi");
      return;
    }
    if (emailRef.current.value === "") {
      toast("Email ei tohi olla tühi!");
      return;
    }
    if (paroolRef.current.value === "") {
      toast("Parool ei tohi olla tühi!");
      return;
    }
    kasutajadFailist.push({
      "kasutajanimi": nimiRef.current.value,
      "email": emailRef.current.value,
      "parool": paroolRef.current.value
    });
    setKasutajad(kasutajadFailist.slice());
    toast("Uus kasutaja edukalt lisatud!");
  }
    function kustuta(index) {
    kasutajadFailist.splice(index,1);
    setKasutajad(kasutajadFailist.slice());
  }
  return (
    <div>
      < HaldaHome />
      <div className="vorm">
      <label>Kasutajanimi</label>
        <input ref={nimiRef} type="text" />

        <label>Email</label>
        <input ref={emailRef} type="text" />

        <label>Parool</label>
        <input ref={paroolRef} type="text" />

        <button onClick={lisa}>Sisesta</button>
        </div>

        <div>Kasutajate arv: {kasutajad.length} tk.</div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Kasutajanimi</th>
                    <th>Email</th>
                    <th>Parool</th>
                    <th>Muuda</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {kasutajad.map((kasutaja, index) =>
                <tr key={kasutaja.nimi}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{kasutaja.kasutajanimi}</td>
                    <td>{kasutaja.email}</td>
                    <td>{kasutaja.parool}</td>
                    <td className="redigeeri-nupp">
                      <Link to={"/muuda-kasutaja/" + index}>
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

export default HaldaKasutajad