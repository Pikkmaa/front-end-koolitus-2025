import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json"
import HaldaHome from "./HaldaHome";
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'


function HaldaAutod() {
    const [autod, setAutod] = useState(autodFailist.slice());
    const autodRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

    function kustuta(index) {
        autodFailist.splice(index,1); // mitmendat, mitu tükki.
        setAutod(autodFailist.slice());
    }

    function lisa() {
        if (autodRef.current.value === "") {
            toast.error("Auto nimi ei tohi olla tühi");
            return;
        }
        if (hindRef.current.value <= 0) {
            toast.error("Hind peab olema positiivne!");
            return;
        }
        autodFailist.push({
            "nimi": autodRef.current.value,
            "hind": Number(hindRef.current.value),
            "aktiivne": aktiivneRef.current.checked,
            "pilt": piltRef.current.value
        });
        setAutod(autodFailist.slice())
        toast.success("Uus auto lisatud!");
    }



  return (
    <div>
        < HaldaHome />
        <div className="vorm">
        <label>Auto nimi</label>
        <input ref={autodRef} type="text" />

        <label>Auto hind</label>
        <input ref={hindRef} type="number" />

        <label>Auto pilt</label>
        <input ref={piltRef} type="text" />

        <label>Auto aktiivne</label>
        <input ref={aktiivneRef} type="checkbox" />
        <button onClick={lisa}>Sisesta</button>
        </div>

        <div>Autode arv: {autod.length} tk.</div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Auto nimi</th>
                    <th>Auto hind</th>
                    <th>Auto aktiivne</th>
                    <th>Auto pilt</th>
                    <th>Muuda</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {autod.map((auto, index) =>
                <tr key={auto.nimi}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{auto.nimi}</td>
                    <td>{auto.hind}</td>
                    <td>{auto.aktiivne ? "Aktiivnee" : "Mitteaktiivne"}</td>
                    <td><img className="halda-toote-pilt" src={auto.pilt} alt="" /></td>
                    <td className="redigeeri-nupp">
                      <Link to={"/muuda-auto/" + index}>
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

export default HaldaAutod