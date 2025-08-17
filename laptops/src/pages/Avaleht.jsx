function Avaleht() {
  const arvutid = JSON.parse(localStorage.getItem("laptops")) || [];

  function lisaOstukorvi(arvuti) {

        const ostukorv = JSON.parse(localStorage.getItem("cartLaptops")) || [];
        ostukorv.push(arvuti);
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));

    }
  return (
    <div className="avaleht-text">
    <div>Tere </div> <br /> <br />
    <div> Siin lehel saad sülearvuteid vaadata ja lisada</div>
    {arvutid.map(arvuti =>
      <div key={arvuti.mark}>
        <div>{arvuti.mark}</div>
        <div>{arvuti.mudel}</div>
        <div>{arvuti.maksumus}</div>
        <button onClick={() => lisaOstukorvi (arvuti)}>Lisa ostukorvi</button>
      </div>
    )}

    </div>)
}

export default Avaleht