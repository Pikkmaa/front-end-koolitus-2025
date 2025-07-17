import { useState } from "react"

function Seaded() {
    const [keel, setKeel] = useState("et")
  return (
    <div>
        <button className={keel === "et" ? "keel-aktiivne" :undefined} onClick= {() => setKeel("et")}>Eesti</button>
        <button className={keel === "en" ? "keel-aktiivne" :undefined} onClick= {() => setKeel("en")}>English</button>
        <button className={keel === "es" ? "keel-aktiivne" :undefined} onClick= {() => setKeel("es")}>Espanol</button>
        <button className={keel === "ru" ? "keel-aktiivne" :undefined} onClick= {() => setKeel("ru")}>Russia</button>
        <div>Hetkel aktiivne keel: {keel} </div>

        {keel === "et" && <div>Leht on eesti keeles</div>}
        {keel === "en" && <div>Page is in English</div>}
        {keel === "es" && <div>La pagina esta en espanol</div>}
        {keel === "ru" && <div>---------------</div>}
        {keel !== "et" && <div><i></i>Translation other than Estonian are not ready<i/></div>}

    </div>
  )
}

export default Seaded