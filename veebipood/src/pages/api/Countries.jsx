import { useState } from "react";
import { useEffect } from "react";

function Countries() {

    const [riigid, setRiigid] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name")
        .then(res => res.json())
        .then((json) => setRiigid(json));    
    }, []);
  return (
    <div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Riigi nimi</th>
                    <th>Ametlik nimi</th>
                    <th>Kohalik nimi</th>
                </tr>
                </thead>
            <tbody>
                {riigid.map((riik, index) =>
                <tr key={riik.name.common || index}>
                    <td>{index + 1}</td>
                    <td>{riik.name.common}</td>
                    <td>{riik.name.official}</td>
                    <td>{Object.values(riik.name.nativeName)[0]
                  ? Object.values(riik.name.nativeName)[0].common
                  : "—"}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Countries