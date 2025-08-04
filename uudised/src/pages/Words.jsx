import { useState } from "react";

function Words() {
    const [words, setWords] = useState(["spray", "elite", "exuberant", "destruction", "present"]);
    function tyhjendaList() {
        setWords([]);
    }
  return (
    <div>
        <button onClick={tyhjendaList}>Tühjenda</button>
        {words.length === 0 && <div>Sõnu pole!</div>}
        <div>{words.map(word => <div key={word}>{word}</div>)} </div>
    </div>
  )
}

export default Words