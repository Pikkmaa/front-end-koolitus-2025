import { useRef, useState } from "react";
import hinnadFailist from '../../data/hinnad.json'
import HaldaHome from "./HaldaHome";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'


function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();
  const sonaRef = useRef();

  function lisa() {// ref current value by default on alati sõna
    if (hindRef.current.value <= 0) {
        toast("Hind ei tohi olla negatiivne!");
        return;
    }
    if (sonaRef.current.value === "") {
      toast("Hind peab olema kirjeldatud sõnana");
      return;
    }
    hinnadFailist.push({
      "number": Number(hindRef.current.value),
      "sonana": sonaRef.current.value
    });
    setHinnad(hinnadFailist.slice());
  }

  function kustuta(index) {
    hinnadFailist.splice(index,1);
    setHinnad(hinnadFailist.slice());
  }
  return (
    <div>
      < HaldaHome />
      <div className="vorm">
      <label>Hind</label>
      <input ref={hindRef} type="text" />
      <label>Sõnana</label>
      <input ref={sonaRef} type="text" />
      <button onClick={lisa}>Sisesta</button>
      </div>

      <div>Hindade arv: {hinnad.length} tk.</div>
      <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Hind</th>
                    <th>Sõnana</th>
                    <th>Muuda</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                <tr key={hind.number}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{hind.number}</td>
                    <td>{hind.sonana}</td>
                    <td className="redigeeri-nupp">
                      <Link to={"/muuda-hind/" + hind.number}>
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

export default HaldaHinnad