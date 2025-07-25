import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Uudised from './pages/Uudised'
import Seaded from './pages/Seaded'

function App() {

  return (
    <>
      <div>
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
