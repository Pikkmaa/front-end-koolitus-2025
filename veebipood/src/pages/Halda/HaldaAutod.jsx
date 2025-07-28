import { useState } from "react";

function HaldaAutod() {
    const [autod, setAutod] = useState([
        "Toyota",
        "Ford",
        "Honda",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Chevrolet",
        "Hyundai",
        "Nissan",
        "Volkswagen"
    ]);

    function kustuta(index) {
        autod.splice(index,1); // mitmendat, mitu tükki.
        setAutod(autod.slice());
    }



  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Auto</th>
                    <th>Kustuta</th>
                </tr>
                </thead>
            <tbody>
                {autod.map((auto, index) =>
                <tr key={auto}>
                    <td>{index+1}.</td>
                    <td>{index}</td>
                    <td>{auto}</td>
                    <td><button onClick={() => kustuta(index)}>x</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaAutod