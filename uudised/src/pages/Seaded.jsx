import { useState } from "react";

function Seaded() {
    const [aadress,setAadress] = useState("Tallinn");
    const [telefon, setTelefon] = useState("553782");
    const [email, setEmail] = useState("digi.di@digi.ee");
    const [inglisekeelne, setInglisekeelne] = useState("ei")

    function muudaKeel() {
        setAadress("London");
        setTelefon("00033458");
        setEmail("london.london@digi.uk.co");
        setInglisekeelne("jah")
    }
  return (
    <div>

        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>

        <button onClick={muudaKeel}>Muuda inglise keelseks</button>
        {inglisekeelne === "jah" && <div> Leht on inglise keelne

        </div> }
    </div>
  )
}

export default Seaded