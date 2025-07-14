import { useState } from "react"

function Esindused() {
    const [linn, setLinn] = useState("Tallinn");


  return (
    <div>
        <div>Hetkel aktiivne esindus: {linn} </div>
        <button onClick = {() => setLinn("Tallinn")}>Tallinn</button>
        <button onClick = {() => setLinn("Tartu")}>Tartu</button>
        <button onClick = {() => setLinn("Narva")}>Narva</button>
        <button onClick = {() => setLinn("Pärnu")}>Pärnu</button>

        {linn === "Tallinn" && <div>
            <div>Ülemiste</div>
            <div>Magistraali</div>
            <div>Kristiine</div>
            <div>Vesse</div>
            <div>Järve</div>
            <div>Järveotsa</div>
        </div>}

        {linn === "Tartu" && <div>
            <div>Raatuse</div>
            <div>Lõunakeskus</div>
        </div>}

        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}



    </div>
  )
}

export default Esindused