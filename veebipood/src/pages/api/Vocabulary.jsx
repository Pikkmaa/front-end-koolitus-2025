import { useState } from "react";
import { useEffect } from "react";

function Vocabulary() {

    const [s6nad, setS6nad] = useState([]);

    useEffect(() => {
        fetch("https://marineregions.org/rest/getGazetteerTypes.json")
        .then(res => res.json())
        .then((json) => setS6nad(json));    
    }, []);
  return (
    <div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Sõna</th>
                    <th>Seletus</th>
                </tr>
                </thead>
            <tbody>
                {s6nad.map(s6na =>
                <tr key={s6na.typeID}>
                    <td>{s6na.typeID}</td>
                    <td>{s6na.type}</td>
                    <td>{s6na.description}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Vocabulary