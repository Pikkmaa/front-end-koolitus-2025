import { useRef, useState } from "react";

function Maksimaalnekalkulaator() {
  const ylalpeetavRef = useRef(0);
  const sissetulekRef = useRef(2000);
  const kohustusedRef = useRef(0);
  const [j22k, setJ22k] = useState(2000);
  const [limiit, setLimiit ] = useState(150000);
  const [veateade, setVeateade] = useState("");


  function arvutaLimiit() {
    const neto = Number(sissetulekRef.current.value);
    const kohustused = Number(kohustusedRef.current.value);
    const ylalpeetavad = Number(ylalpeetavRef.current.value);

    const uusJ22k = neto - kohustused;
    setJ22k(uusJ22k);

    const arvutatav = uusJ22k - ylalpeetavad * 100;

    if (arvutatav <= 1000) {
      setVeateade("Maksimaalse limiidi arvutamiseks on netosissetulek liiga väike või igakuised kohustused liiga suured.");
      setLimiit(0);
      return;
    }

    setVeateade("");
    setLimiit(arvutatav * 75);
  }


  return (
    <div>


      <h2>Maksimaalne limiit</h2>
      {veateade === "" ? <div><strong>Limiit:</strong> <div className="summa-aktiivne">{limiit.toFixed(2)}</div></div> : <div className="veateade">{veateade}</div>}



      <label>Ülalpeetavad</label>
      <select ref={ylalpeetavRef} defaultValue={0} onChange={arvutaLimiit}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select> <br />

      <label>Netosissetulek</label>
      <input type="number" ref={sissetulekRef} defaultValue={2000} onChange={arvutaLimiit} /> <br />

      <label>Igakuised kohustused</label>
      <input type="number" ref={kohustusedRef} defaultValue={0} onChange={arvutaLimiit} /> <br />


      <label>Sissetulek pärast kohustusi</label>
      <input disabled type="number" value={j22k} /> <br />
    </div>
  );
}

export default Maksimaalnekalkulaator;