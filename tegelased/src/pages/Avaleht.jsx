import { useState } from "react"

function Avaleht() {
    const [klikikud, setKlikitud] = useState("");
    const tegelased =[
        {"eesnimi": "Mickey", "perenimi": "Mouse", "elukoht": "Disneyland"},
        {"eesnimi": "Minnie", "perenimi": "Mouse", "elukoht": "Disneyland"},
        {"eesnimi": "Winnie", "perenimi": "Pooh", "elukoht": "Hundred Acre Wood"},
        {"eesnimi": "Roo", "perenimi": "Kangaroo", "elukoht": "Cristal Cove"}
    ]
    function kuvaNimi(tegelane) {
        console.log(tegelane);
        setKlikitud(tegelane)
    }


  return (

    <div>
        {klikikud != "" && <div>Klikitud tegelane on {klikikud} </div> }
        <div >{tegelased.map(tegelane =>
          <div key={tegelane.eesnimi}>
            {tegelane.eesnimi} <br />
            {tegelane.perenimi} <br />
            {tegelane.elukoht} <br />
            <button onClick={()=> kuvaNimi(tegelane.eesnimi)} >Tegelase nimi</button>
            </div>)}
        </div>

    <div>
        <div>Mickey</div>
        <div>Mouse</div>
        <div>Disneyland</div>
    </div>

    <div>
        <div>Minnie</div>
        <div>Mouse</div>
        <div>Disneyland</div>
    </div>

    <div>
        <div>Winnie</div>
        <div>Pooh</div>
        <div>Hundred Acre Wood</div>
    </div>

    <div>
        <div>Roo</div>
        <div>Kangaroo</div>
        <div>Cristal Cove</div>
    </div>
 </div> )
}

export default Avaleht