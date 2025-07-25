import { useState } from "react"

function Kontakt() {
  const [urmasetel, muudaUrmasetel] = useState(false);
  const [reinutel, muudaReinutel] = useState(false);
  const [matitel, muudaMatitel] = useState(false);
  return (
    <div>
    <div>See on kontaktide leht, nähtav localhost:5173 aadressil</div>

    <div className={urmasetel === true ? "valitud" : undefined} onClick={() => muudaUrmasetel(!urmasetel)} >Urmas Hiir</div>
    {urmasetel && <div>tel: 90034501</div>}
    <div>email: urmas.hiir@uudised.ee</div>

    <div className={reinutel === true ? "valitud" : undefined} onClick={() => muudaReinutel(!reinutel)} >Rein Rebane</div>
    {reinutel && <div>tel: 90034502</div>}
    <div>email: rein.rebane@uudised.ee</div>

    <div className={matitel === true ? "valitud" : undefined} onClick={() => muudaMatitel(!matitel)} >Mati Karu</div>
    {matitel && <div>tel: 90034503</div>}
    <div>email: mati.karu@uudised.ee</div>
    

    </div>
  )
}

export default Kontakt