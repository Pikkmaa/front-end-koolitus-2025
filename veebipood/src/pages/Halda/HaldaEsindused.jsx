import { useRef, useState } from "react";
import esindusedFailist from '../../data/esindused.json';
import HaldaHome from "./HaldaHome";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();

  function lisa() {
    if (esindusRef.current.value === "") {
      toast("Esinduse nimi ei tohi olla tühi");
      return;
      }
    if (aadressRef.current.value === "") {
    toast("Aadress ei tohi olla tühi!");
    return;
    }
    esindusedFailist.push({
      "keskus": esindusRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
    });
    setEsindused(esindusedFailist.slice());
    toast("Uus esindus edukalt lisatud!");
  }

  function kustuta(index) {
    esindusedFailist.splice(index,1);
    setEsindused(esindusedFailist.slice());
  }
  return (
    <div>
      < HaldaHome />
      <div className="vorm">
      <label>Esinduse nimi</label>
      <input ref={esindusRef} type="text" /> 
      <label>Esinduse telefon</label>
      <input ref={telefonRef} type="text" /> 
      <label>Esinduse aadress</label> 
      <input ref={aadressRef} type="text" />
      <button onClick={lisa}>Sisesta</button>
      </div>

      <div>Esinduste arv: {esindused.length} tk.</div>
      <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Esindus</th>
                    <th>Telefon</th>
                    <th>Aadress</th>
                    <th>Muuda</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {esindused.map((esindus, index) =>
                <tr key={esindus.keskus}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{esindus.keskus}</td>
                    <td>{esindus.tel}</td>
                    <td>{esindus.aadress}</td>
                    <td className="redigeeri-nupp">
                      <Link to={"/muuda-esindus/" + index}>
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

export default HaldaEsindused