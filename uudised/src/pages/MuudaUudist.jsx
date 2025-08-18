import { useRef } from 'react';
import {useParams} from 'react-router-dom'
function MuudaUudist() {
    const {index} = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudisedId")) || [];
    const leitud = uudisedLS[index];
    const uudisRef = useRef();
    function muuda() {
        uudisedLS[index] = uudisRef.current.value;
        localStorage.setItem("uudisedId", JSON.stringify(uudisedLS));
    }
  return (
    <div>
        <label>Uudis</label> <br />
        <input ref={uudisRef} type="text" defaultValue={leitud} /> <br />
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaUudist