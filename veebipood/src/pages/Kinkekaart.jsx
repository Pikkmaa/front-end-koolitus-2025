import { useRef, useState } from "react";


function Kinkekaart() {
    //let summa = 20;
    const [summa, setSumma] = useState(20);
    const [kogus, seKogus] = useState(1);
    const emailRef = useRef()

    function sisesta() {
        if (emailRef.current.value === "") {
            alert("Email ei saa olla tühi!");
            return; // lõpeta funtsioon, ära edasi mine
        }

        if (emailRef.current.value.includes("@") === false) {
            alert("Email ei saa olla @ märgita!");
            return; // lõpeta funtsioon, ära edasi mine
        }

        alert("Email lisatud!")
    }
  return (
    <div>
        <button className={summa === 20 ? "summa-aktiivne" :undefined} onClick = {() => setSumma(20)}>20€</button>
        <button className={summa === 50 ? "summa-aktiivne" :undefined} onClick = {() => setSumma(50)}>50€</button>
        <button className={summa === 100 ? "summa-aktiivne" :undefined} onClick = {() => setSumma(100)}>100€</button>
        <div>Kinkekaart { summa }€</div>

        <br></br>

        <button disabled={kogus === 1} onClick={ () => seKogus(kogus - 1) } >-</button>
        <span>{kogus}</span>
        <button onClick={ () => seKogus(kogus + 1) }>+</button>

        <div>{ summa * kogus } €</div>

        <label>Email </label> <br />
        <input ref = {emailRef }type="text" /> <br />
        <button onClick={sisesta} >Sisesta</button>  <br />



    </div>
  )
}

export default Kinkekaart