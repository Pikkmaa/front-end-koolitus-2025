import { useState } from "react";
import {Link} from 'react-router-dom';

function HaldaUudiseid() {
    const [uudised, setUudised] = useState(JSON.parse(localStorage.getItem("uudisedId")) || []);

    function kustuta (index) {
        uudised.splice(index,1);
        setUudised(uudised.slice());
        localStorage.setItem("uudisedId", JSON.stringify(uudised));
    }
  return (
    <div>
        <div>{uudised.map((uudis, index) =>
            <div>
                <div key={uudis}>{uudis}</div>
                <Link to={"/muuda-uudist/" + index} >
                <button>Muuda</button>
                </Link>
                <button onClick={() => kustuta(index)}>x</button>
            </div>
        )}</div>
    </div>
  )
}

export default HaldaUudiseid