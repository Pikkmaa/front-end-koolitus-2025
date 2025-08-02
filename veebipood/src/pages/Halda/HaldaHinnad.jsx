import { useRef, useState } from "react";
import hinnadFailist from '../../data/hinnad.json'
import HaldaHome from "./HaldaHome";


function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();

  function lisa() { // ref current value by default on alati sõna
    hinnadFailist.push(Number(hindRef.current.value));
    setHinnad(hinnadFailist.slice());
  }

  function kustuta(index) {
    hinnadFailist.splice(index,1);
    setHinnad(hinnadFailist.slice());
  }
  return (
    <div>
      < HaldaHome />
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>

      <div>Hindade arv: {hinnad.length} tk.</div>
      <table className="halda-tabel">
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Hind</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                <tr key={hind}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{hind}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad