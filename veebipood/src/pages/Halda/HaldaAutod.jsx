import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json"


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
        autodFailist.push({
            "nimi": autodRef.current.value,
            "hind": Number(hindRef.current.value),
            "aktiivne": aktiivneRef.current.checked,
            "pilt": piltRef.current.value
        });
        setAutod(autodFailist.slice())
    }



  return (
    <div>
        <label>Auto nimi</label>
        <input ref={autodRef} type="text" /> <br />

        <label>Auto hind</label>
        <input ref={hindRef} type="number" /> <br />

        <label>Auto pilt</label>
        <input ref={piltRef} type="text" /> <br/>

        <label>Auto aktiivne</label>
        <input ref={aktiivneRef} type="checkbox" /> <br />
        <button onClick={lisa}>Sisesta</button>

        <div>Autode arv: {autod.length} tk.</div>
        <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Auto nimi</th>
                    <th>Auto hind</th>
                    <th>Auto aktiivne</th>
                    <th>Auto pilt</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {autod.map((auto, index) =>
                <tr key={auto}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{auto.nimi}</td>
                    <td>{auto.hind}</td>
                    <td>{auto.aktiivne ? "Aktiivnee" : "Mitteaktiivne"}</td>
                    <td><img src={auto.pilt} alt="" /></td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaAutod