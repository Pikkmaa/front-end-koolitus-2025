import { useState } from "react";

function Animals() {
    const [animals, setAnimals] = useState(["pigs", "goats", "sheep"]);
    function tyhjendaList() {
        setAnimals([]);
    }
  return (
    <div>
        <button onClick={tyhjendaList}>Tühjenda</button>
        {animals.length === 0 && <div>Loomi pole!</div>}
        <div>{animals.map(animal => <div key={animal}>{animal}</div>)} </div>
    </div>
  )
}

export default Animals