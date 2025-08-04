import { useState } from "react";

function Months() {
    const [months, setMoths] = useState(["March", "Jan", "Feb", "Dec"]);
    function tyhjendaList() {
        setMoths([]);
    }
  return (
    <div>
        <button onClick={tyhjendaList}>Tühjenda</button>
        {months.length === 0 && <div>Kuid pole!</div>}
        <div>{months.map(month => <div key={month}>{month}</div>)} </div>
    </div>
  )
}

export default Months