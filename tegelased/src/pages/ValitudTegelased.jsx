import { useState } from "react"

function ValitudTegelased() {
  const [valitudTegelased, setValitudTegelased] = useState(
    JSON.parse(localStorage.getItem("valitudTegelane")) || []
  );

  function kustuta (index) {
    valitudTegelased.splice(index,1);
    setValitudTegelased(valitudTegelased.slice());
    localStorage.setItem("valitudTegelane", JSON.stringify(valitudTegelased));

  }

  function tyhjenda () {
    setValitudTegelased([]);
    localStorage.setItem("valitudTegelane", JSON.stringify([]));
  }
  return (
    <div>
      {valitudTegelased.length > 0 && <div>Valitud on {valitudTegelased.length} tegelast</div>}
      {valitudTegelased.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {valitudTegelased.length === 0 && <div>Tegelasi pole veel valitud</div>}
      {valitudTegelased.map( (tegelane, index) =>
       <div>
        {tegelane.eesnimi + " "}
        {tegelane.perenimi + " "}
        {tegelane.elukoht + " "}
        {tegelane.vanus}
        <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default ValitudTegelased