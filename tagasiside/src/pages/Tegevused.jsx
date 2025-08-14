import { useState } from 'react'
import tegevusedFailist from '../tegevused.json'

function Tegevused() {
    const [tegevused, setTegevused] = useState(tegevusedFailist);

  function kuvaUser1() {
    setTegevused(tegevusedFailist.filter(tegevus => tegevus.userId === 1));
  }

  function kuvaUser2() {
    setTegevused(tegevusedFailist.filter(tegevus => tegevus.userId === 2));
  }

  function kuvaUser3() {
    setTegevused(tegevusedFailist.filter(tegevus => tegevus.userId === 3));
  }

  function kuvaValmis() {
    setTegevused(tegevusedFailist.filter(tegevus => tegevus.completed));
  }

  function kuvaMitteValmis() {
    setTegevused(tegevusedFailist.filter(tegevus => !tegevus.completed));
  }

  function kuvaTAlgavad() {
    setTegevused(tegevusedFailist.filter(tegevus =>
        tegevus.title.toLowerCase().startsWith("t")));
  }

  function kuvaPikemKui20() {
    setTegevused(tegevusedFailist.filter(tegevus =>
        tegevus.title.length > 20));
  }

  function reset() {
    setTegevused(tegevusedFailist);
  }
  return (
    <div>
        <div>Tegevusi kokku {tegevused.length}</div>
        <button onClick={kuvaUser1}>Kuva Kõik kasutaja ID 1 tegevused</button>
        <button onClick={kuvaUser2}>Kuva Kõik kasutaja ID 2 tegevused</button>
        <button onClick={kuvaUser3}>Kuva Kõik kasutaja ID 3 tegevused</button>
        <button onClick={kuvaValmis}>Kuva kõik valmis tegevused</button>
        <button onClick={kuvaMitteValmis}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={kuvaTAlgavad} >Kuva kõik t tähega alagavad tegevused</button>
        <button onClick={kuvaPikemKui20} >Kuva tegevused, millel on tähemärke rohkem, kui 20</button>
        <button onClick={reset} >Kuva kõik tegevused tagasi "reset"</button>



        {tegevused.map(tegevus => <div key={tegevus.id}>
            <div>{tegevus.userId}</div>
            <div>{tegevus.id}</div>
            <div>{tegevus.title}</div>
            <div>{tegevus.completed}</div>
            </div> )}
    </div>
  )
}

export default Tegevused