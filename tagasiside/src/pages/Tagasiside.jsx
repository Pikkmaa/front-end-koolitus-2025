import { useState } from "react"

function Tagasiside() {
    const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
  return (
    <div>
        <div>Tagasiside</div>
        <div>{tagasisided.map(tagasiside => <div key={tagasiside}>{tagasiside}</div>)} </div>
    </div>
  )
}

export default Tagasiside