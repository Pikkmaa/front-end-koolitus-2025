import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Esindused from './pages/arrays/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Kinkekaart from './pages/Kinkekaart'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import ArraysHome from './pages/arrays/ArraysHome'
import HaldaAutod from './pages/Halda/HaldaAutod'
import HaldaHome from './pages/Halda/HaldaHome'
import HaldaEsindused from './pages/Halda/HaldaEsindused'
import HaldaHinnad from './pages/Halda/HaldaHinnad'
import HaldaKasutajad from './pages/Halda/HaldaKasutajad'
import HaldaTootajad from './pages/Halda/HaldaTootajad'
import HaldaTooted from './pages/Halda/HaldaTooted'

function App() {

  return (
    <>
     < Menu />



      <Routes>
        <Route path='/' element= { <Avaleht /> } />
        
        <Route path='/osta-kinkekaarti' element= { <Kinkekaart /> } />
        <Route path='/lisa-toode' element= { <LisaToode /> } />
        <Route path='/seaded' element= { <Seaded /> } />
        <Route path='/ostukorv' element= { <Ostukorv /> } />
        <Route path='/kalkulaator' element= { <Kalkulaator /> } />
        
        
        <Route path='/arrays' element= { <ArraysHome /> } />
        <Route path='/autod' element= { <Autod /> } />
        <Route path='/esindused' element= { <Esindused /> } />
        <Route path='/hinnad' element= { <Hinnad /> } />
        <Route path='/kasutajad' element= { <Kasutajad /> } />
        <Route path='/tootajad' element= { <Tootajad /> } />
        <Route path='/tooted' element= { <Tooted /> } />

        <Route path='/halda' element= { <HaldaHome /> } />
        <Route path='/halda-autod' element= { <HaldaAutod/> } />
        <Route path='/halda-esindused' element= { <HaldaEsindused /> } />
        <Route path='/halda-hinnad' element= { <HaldaHinnad /> } />
        <Route path='/halda-kasutajad' element= { <HaldaKasutajad /> } />
        <Route path='/halda-tootajad' element= { <HaldaTootajad /> } />
        <Route path='/halda-tooted' element= { <HaldaTooted /> } />

        <Route path='/*' element= { <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
