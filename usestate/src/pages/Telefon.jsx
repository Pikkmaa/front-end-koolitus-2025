import { useState } from "react"

function Telefon() {
    const [v2rv, setV2rv] = useState("Vali värv");
  return (
    <div>
        <br />
        {v2rv === "Vali värv" && <div>Telefoni värv on valimata</div>}
        <div>Telefoni värvus: {v2rv}</div>
        <button onClick={() => setV2rv("must")}>Must</button>
        <button onClick={() => setV2rv("valge")}>Valge</button>
        <button onClick={() => setV2rv("hall")}>Hall</button>
        <button onClick={() => setV2rv("roheline")}>Roheline</button>
        <button onClick={() => setV2rv("punane")}>Punane</button>
        <br />

        {v2rv === "must" && <div className="must-ring"></div>}
        {v2rv === "valge" && <div className="valge-ring"></div>}
        {v2rv === "hall" && <div className="hall-ring"></div>}
        {v2rv === "roheline" && <div className="roheline-ring"></div>}
        {v2rv === "punane" && <div className="punane-ring"></div>}




    </div>
  )
}

export default Telefon