import './App.css'
import { Route, Routes } from "react-router-dom"
import {Button} from '@mui/material'
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
import MuudaAuto from './pages/muuda/MuudaAuto'
import MuudaEsindus from './pages/muuda/MuudaEsindus'
import MuudaHind from './pages/muuda/MuudaHind'
import MuudaTootaja from './pages/muuda/MuudaTootaja.jsx'
import MuudaToode from './pages/muuda/MuudaToode.jsx'
import YksAuto from './pages/yks/YksAuto.jsx'
import YksEsindus from './pages/yks/YksEsindus.jsx'
import YksHind from './pages/yks/YksHind.jsx'
import YksKasutaja from './pages/yks/YksKasutaja.jsx'
import YksTootaja from './pages/yks/YksTootaja.jsx'
import YksToode from './pages/yks/YksToode.jsx'
import MuudaKasutaja from './pages/muuda/MuudaKasutaja.jsx'
import { useState } from 'react'
import Email from './pages/Email.jsx'
import Kaart from './pages/Kaart.jsx'
import ApiHome from './pages/api/ApiHome.jsx'
import Books from './pages/api/Books.jsx'
import Cars from './pages/api/Cars.jsx'
import Countries from './pages/api/Countries.jsx'
import Products1 from './pages/api/Products1.jsx'
import Products2 from './pages/api/Products2.jsx'
import Products3 from './pages/api/Products3.jsx'
import Vocabulary from './pages/api/Vocabulary.jsx'


function App() {
  const [tume, setTume ] = useState(JSON.parse(localStorage.getItem("tume")));


  function tumedaks() {
    setTume(true);
    localStorage.setItem("tume", JSON.stringify(true))

  }

  function heledaks() {
    setTume(false);
    localStorage.setItem("tume", JSON.stringify(false))

  }

  return (
    <div className={tume ? 'tume' : undefined}>
     < Menu />
     <Button variant='contained' onClick={tumedaks}>Tumedaks</Button>
     <Button variant='outlined' onClick={heledaks}>Heledaks</Button>
     <br /><br />



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

        <Route path='/muuda-auto/:name' element= { <MuudaAuto/> } />
        <Route path='/muuda-esindus/:pood' element= { <MuudaEsindus /> } />
        <Route path='/muuda-hind/:v22rtus' element= { <MuudaHind /> } />
        <Route path='/muuda-kasutaja/:name' element= { <MuudaKasutaja /> } />
        <Route path='/muuda-tootaja/:name' element= { <MuudaTootaja /> } />
        <Route path='/muuda-toode/:name' element= { <MuudaToode /> } />

        <Route path='/yks-auto/:name' element= { <YksAuto/> } />
        <Route path='/yks-esindus/:pood' element= { <YksEsindus /> } />
        <Route path='/yks-hind/:v22rtus' element= { <YksHind /> } />
        <Route path='/yks-kasutaja/:name' element= { <YksKasutaja /> } />
        <Route path='/yks-tootaja/:name' element= { <YksTootaja /> } />
        <Route path='/yks-toode/:name' element= { <YksToode /> } />

        <Route path='/api-home' element= { <ApiHome/> } />
        <Route path='/books' element= { <Books /> } />
        <Route path='/cars' element= { <Cars /> } />
        <Route path='/countries' element= { <Countries /> } />
        <Route path='/products1' element= { <Products1 /> } />
        <Route path='/products2' element= { <Products2 /> } />
        <Route path='/products3' element= { <Products3 /> } />
        <Route path='/vocabulary' element= { <Vocabulary /> } />

        <Route path='/email' element= { <Email /> } />
        <Route path='/kaart' element= { <Kaart /> } />

        <Route path='/*' element= { <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App
