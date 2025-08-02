import { useRef, useState } from "react"
import esindusedFailist from '../../data/esindused.json'
import HaldaHome from "./HaldaHome";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const esindusRef = useRef();

  function lisa() {
    esindusedFailist.push(esindusRef.current.value);
    setEsindused(esindusedFailist.slice());
  }

  function kustuta(index) {
    esindusedFailist.splice(index,1);
    setEsindused(esindusedFailist.slice());
  }
  return (
    <div>
      < HaldaHome />
      <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>

      <div>Esinduste arv: {esindused.length} tk.</div>
      <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Esindus</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {esindused.map((esindus, index) =>
                <tr key={esindus}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{esindus}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused