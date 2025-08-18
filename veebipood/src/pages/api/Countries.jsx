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
                </tr>
                </thead>
            <tbody>
                {riigid.map((riik, index) =>
                <tr key={riik.name || index}>
                    <td>{index + 1}</td>
                    <td>{riik.name.common}</td>
                    <td>{riik.name.official}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Countries