import { useRef, useState } from "react"

function Tagasiside() {
  const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
  const tagasisisdeRef = useRef();
    
  function kustuta(index) {
    tagasisided.splice(index,1);
    setTagasisided(tagasisided.slice());
  }
  function lisaUusTagasisde() {
    tagasisided.push(tagasisisdeRef.current.value);
    setTagasisided(tagasisided.slice())
  }
  return (
        <div>Tagasisided:
        <div>{tagasisided.map((tagasiside, index) =>
          <div>
            <span> {tagasiside}</span>
            <button onClick={() =>kustuta(index)}>x</button>
            </div>)}
        </div>
        <label>Lisa uus tagasiside</label>
        <input ref={tagasisisdeRef} type="text" />
        <button onClick={lisaUusTagasisde}>Lisa</button>
    </div>
  )
}

export default Tagasiside