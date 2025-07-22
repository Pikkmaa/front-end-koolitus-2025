import { useState } from "react"

function Kujundus() {
    const [valitud, setValitud] = useState("family");
  return (
    <div>
        <span className={valitud === "family" ? "pakett-aktiivne" : "pakett"}
        onClick={() => setValitud("family")}
        >Family</span>
        <span className={valitud === "standard" ? "pakett-aktiivne" : "pakett"}
        onClick={() => setValitud("standard")}
        >Standard</span>
        <span className={valitud === "mini" ? "pakett-aktiivne" : "pakett"}
        onClick={() => setValitud("mini")}
        >Mini</span>



    </div>
  )
}

export default Kujundus