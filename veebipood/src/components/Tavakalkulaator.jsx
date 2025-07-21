import { useState } from "react"

function Tavakalkulaator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState();
  const [operator, setOperator] = useState("");
  const [ready, setReady] = useState(false)


  function reset() {
    setNumber1(0);
    setNumber2();
    setOperator("");
    setReady(false)
  }



  function setNumber(number) {
    if (operator === "") {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
  }
  return (
    <div>
      <div>
        <span>{number1}</span>
        <span>{operator}</span>
        {number2 !== undefined && operator !== "" && <span>{number2}</span>}
        {number2 !== undefined && <span>=</span>}
        {operator === "*" && ready && <span>{number1 * number2}</span>}
        {operator === "/" && ready && <span>{number1 / number2}</span>}
        {operator === "+" && ready && <span>{number1 + number2}</span>}
        {operator === "-" && ready && <span>{number1 - number2}</span>}
      </div>
      <button onClick={() => setNumber(7)} >7</button>
      <button onClick={() => setNumber(8)} >8</button>
      <button onClick={() => setNumber(9)} >9</button>
      <button onClick={() => setOperator("+")} >+</button>
      <br />
      <button onClick={() => setNumber(6)} >6</button>
      <button onClick={() => setNumber(4)} >4</button>
      <button onClick={() => setNumber(5)} >5</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />

      <button onClick={() => setNumber(1)} >1</button>
      <button onClick={() => setNumber(2)} >2</button>
      <button onClick={() => setNumber(3)} >3</button>
      <button onClick={() => setOperator("*")}>*</button>
      <br />
      <button onClick={reset} >C</button>
      <button onClick={() => setNumber(0)} >0</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => setReady(true)} >=</button>
    </div>
  )
}

export default Tavakalkulaator