import { useState } from "react"

function Seaded() {
    const [mood, setMood] = useState(localStorage.getItem("veebilehe_kujundus"));

    function tumedaks() {
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        setMood("dark_mode");
    }

    function heledaks() {
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        setMood("light_mode");
    }
    function varviliseks() {
        localStorage.setItem("veebilehe_kujundus", "colorful_mode")
        setMood("colorful_mode");
    }

  return (
    <div>
        {mood==="dark_mode" && <div>TUME_LEHT</div>}
        {mood==="light_mode" && <div>HELE_LEHT</div>}
        {mood==="colorful_mode" && <div>Värviline_LEHT</div>}
        <button onClick={()=>tumedaks()}>dark-mode ON</button>
        <button onClick={()=>heledaks()}>light-mode ON</button>
        <button onClick={()=>varviliseks()}>colored-mode ON</button>
    </div>
  )
}

export default Seaded