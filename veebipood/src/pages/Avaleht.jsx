import {useState} from 'react'
function Avaleht() {
    const [kogus, setKogus] = useState(0);
    const [sonum, setSonum] = useState("Uuenda kogust");
    const [laigitud, setlaigitud] = useState(false);

    const vahenda = () => {
    //function vahenda() {
        setKogus(kogus -1);
        setSonum("Vahendasid kogust")
    }
    const nulli = () => {
    //function nulli() {
        setKogus(0);
        setSonum("Nullisid koguse")
    }
    const suurenda = () => {
     //function suurenda() {
        setKogus(kogus +1);
        setSonum("Suurendasid kogust")
    }
  return (
    <div>

        <br /><br />

        { laigitud === true && <img onClick={() => setlaigitud(false)} src="/laigitud.svg" alt="" /> }
        { laigitud === false && <img onClick={() => setlaigitud(true)} src="/mitte-laigitud.svg" alt="" /> }
        <button onClick={() => setlaigitud(!laigitud)} >Vaheta like-i </button>



        <div>{sonum} </div>
        { kogus > 0 && <button onClick={nulli} >Tagasi nulli</button>}
        <button disabled={kogus === 0} onClick={ vahenda } >-</button>
        <span className={kogus > 10 ? "kuldne" :undefined} >{kogus}</span>
        <button onClick={suurenda }>+</button>

    </div>
  )
}

export default Avaleht