import { useState } from "react"

function Ostukorv() {
    const [ostukorv, Setostukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops"))) || [];

    function kustuta(index) {
        ostukorv.splice(index,1);
        Setostukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }
  return (
    <div>
        {ostukorv.map((arvuti, index) =>
      <div key={arvuti.mark}>
        <div>{arvuti.mark}</div>
        <div>{arvuti.mudel}</div>
        <div>{arvuti.maksumus}</div>
        <button onClick={() =>kustuta(index)}>x</button>
      </div>
    )}
        
    </div>
  )
}

export default Ostukorv