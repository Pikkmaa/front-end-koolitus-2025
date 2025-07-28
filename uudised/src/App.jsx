import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Uudised from './pages/Uudised'
import Seaded from './pages/Seaded'
import { useState, useRef } from 'react'

function App() {
  const [sisselogitud, setSisselogitud] = useState("ei");
  const [sonum, setSonum] = useState("");
  const kasutjaNimiRef = useRef("");
  const paroolRef = useRef("");

  function logiSisse() {
    if (paroolRef.current.value === "123") {
      setSisselogitud("jah");
      setSonum(kasutjaNimiRef.current.value +", oled sisslogitud!");
      } else {
        setSonum("Vale parool!");
    }
    
  }
  return (
    <>
      <div>
        <div>{sonum}</div>
        {sisselogitud === "ei" && <div>
          <label>kasutajanimi</label> <br />
          <input ref={kasutjaNimiRef} type="text" /> <br />
          <label>parool</label> <br />
          <input ref={paroolRef} type="text" />
        </div>}


        {sisselogitud === "ei" && <button onClick={logiSisse} >Logi sisse</button>}
        {sisselogitud === "jah" && <button onClick={() => setSisselogitud("ei")} >Logi välja</button>}

        <br />
        <Link to='/'>
        <button>Avalehele</button>
        </Link>

        <Link to='/uudised'>
        <button>Uudiste lehele</button>
        </Link>

        <Link to='/kontakt'>
        <button>Kontaktide lehele</button>
        </Link>

        <Link to='/meist'>
        <button>Info meist</button>
        </Link>

         <Link to='/seaded'>
        <button>Seaded</button>
        </Link>









        <Routes>
          <Route path='/' element= { < Avaleht />}/>
          <Route path='/uudised' element= { < Uudised /> }/>
          <Route path='/kontakt' element= { < Kontakt /> }/>
          <Route path='/meist' element= { < Meist /> }/>
          <Route path='/seaded' element= { < Seaded /> }/>
        </Routes>
      </div>
    </>
  )
}

export default App
