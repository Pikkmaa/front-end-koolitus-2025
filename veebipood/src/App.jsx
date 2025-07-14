import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Esindused from './pages/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Kinkekaart from './pages/Kinkekaart'

function App() {

  return (
    <>
      <Link to= "/">
      <img className="pilt" src="https://yamahakeskus.ee/files/_page_pics_origs/burovi6804d9598ab21.jpg" alt="" />
      </Link>
      
      <Link to= "/esindused">
      <button>Esindused</button>
      </Link>

      <Link to= "/osta-kinkekaarti">
      <button>Kinkekaardid</button>
      </Link>

      <Link to= "/lisa-toode">
      <button>Lisa toode</button>
      </Link>

      <Link to= "/seaded">
      <button>Seaded</button>
      </Link>

      <Link to= "/ostukorv">
      <button>Ostukorv</button>
      </Link>



      <Routes>
        <Route path='/' element= { <Avaleht /> } />
        <Route path='/esindused' element= { <Esindused /> } />
        <Route path='/osta-kinkekaarti' element= { <Kinkekaart /> } />
        <Route path='/lisa-toode' element= { <LisaToode /> } />
        <Route path='/seaded' element= { <Seaded /> } />
        <Route path='/ostukorv' element= { <Ostukorv /> } />
        <Route path='/*' element= { <NotFound /> } />

      </Routes>
    </>
  )
}

export default App
