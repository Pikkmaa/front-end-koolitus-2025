import { useState } from "react"

function Hind() {
    const [hind, setHind] = useState(0)
  return (
    <div>
        {hind === 0 && <div>Mälukaart valimata!</div> }
        <div>Valitud mälukaardiga telefoni hind: {hind}</div>
        <button className={hind === 30 ? "aktiivne" : undefined} onClick={() => setHind(30)}>Mälukaart 16GB</button>
        <button className={hind === 50 ? "aktiivne" : undefined} onClick={() => setHind(50)}>Mälukaart 32GB</button>
        <button className={hind === 80 ? "aktiivne" : undefined} onClick={() => setHind(80)}>Mälukaart 64GB</button>
        <button className={hind === 110 ? "aktiivne" : undefined} onClick={() => setHind(110)}>Mälukaart 128GB</button>
        <button className={hind === 130 ? "aktiivne" : undefined} onClick={() => setHind(130)}>Mälukaart 256GB</button>
        <button className={hind === 150 ? "aktiivne" : undefined} onClick={() => setHind(150)}>Mälukaart 512GB</button>
    </div>
  )
}

export default Hind