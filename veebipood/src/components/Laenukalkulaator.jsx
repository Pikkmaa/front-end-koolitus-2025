import { useRef, useState } from "react";



function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(401.04);
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intress, setIntress] = useState(3.85);
  const [veateade, setVeateade] = useState("");
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();


  function arvutaKuumakse () {
    const intressKokku = Number(euriborRef.current.value) + Number(marginaalRef.current.value);
    setIntress(intressKokku);

    if (intressKokku <= 0) {
      setVeateade("Intress peab olema suurem kui 0%");
      return;
    }

    const laen = ostuhindRef.current.value - sissemakseRef.current.value;
    setLaenusumma(laen);
    if (laen < 20000 || laen > 10000000 ) {
      setVeateade("Laenusumma peab olema rohkem kui 20 000 - 10 000 000 eurot");
      return;
    }
    setVeateade("")


    setKuumakse( (ostuhindRef.current.value - sissemakseRef.current.value)
    / perioodRef.current.value / 12 *
    intressKokku/ 2);
    
  }



  return (
    <div>
      {veateade === "" ?  <div>{kuumakse.toFixed(2)}</div> : <div>{veateade}</div> }
      <label>Kinnisvara ostuhind</label>
      <input defaultValue={75000} onChange={arvutaKuumakse} ref={ostuhindRef} type="number"></input> <br />
      <label>Sissemakse</label>
      <input defaultValue={0} onChange={arvutaKuumakse} ref={sissemakseRef} type="number"></input> <br />
      <label>Laenusumma</label>
      <input disabled value={laenusumma} type="number"></input> <br />
      <label>Periood</label>
      {/* <input defaultValue={30} onChange={arvutaKuumakse} ref={perioodRef} type="number"></input> <br /> */}
      <select defaultValue={30} onChange={arvutaKuumakse} ref={perioodRef}> <br />
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select> <br />
      <label>Marginaal</label>
      <input defaultValue={1.7} onChange={arvutaKuumakse} ref={marginaalRef} type="number"></input> <br />
      <label>Euribor</label>
      <input defaultValue={2.14} onChange={arvutaKuumakse} ref={euriborRef} type="number"></input> <br />
      <label>Intress kokku</label>
      <input disabled value={intress.toFixed(2)} type="number"></input> <br />
    </div>
  )
}

export default LaenuKalkulaator