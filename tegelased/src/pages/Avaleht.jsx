import { useState } from "react"

function Avaleht() {
    const [klikikud, setKlikitud] = useState("");
   /*  const tegelased =[
        {"eesnimi": "Mickey", "perenimi": "Mouse", "elukoht": "Disneyland", "vanus": 20},
        {"eesnimi": "Minnie", "perenimi": "Mouse", "elukoht": "Disneyland", "vanus": 21},
        {"eesnimi": "Winnie", "perenimi": "Pooh", "elukoht": "Hundred Acre Wood", "vanus": 22},
        {"eesnimi": "Roo", "perenimi": "Kangaroo", "elukoht": "Cristal Cove", "vanus": 27}
    ] */
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    function kuvaNimi(tegelane) {
        console.log(tegelane);
        setKlikitud(tegelane)
    }
    function valiTegelane(klikitudTegelane) {
        const valitud = JSON.parse(localStorage.getItem("valitudTegelane")) || [];
        valitud.push(klikitudTegelane);
        localStorage.setItem("valitudTegelane",JSON.stringify(valitud))
    }


  return (

    <div>
        {klikikud != "" && <div>Klikitud tegelane on {klikikud} </div> }
        <div >{tegelased.map(tegelane =>
          <div key={tegelane.eesnimi}>
            {tegelane.eesnimi} <br />
            {tegelane.perenimi} <br />
            {tegelane.elukoht} <br />
            {tegelane.vanus} <br />
            <button onClick={() => valiTegelane(tegelane)}>Vali</button>
            <button onClick={()=> kuvaNimi(tegelane.eesnimi)} >Tegelase nimi</button>
            </div>)}
        </div>
 </div> )
}

export default Avaleht