import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Esindused from './pages/Esindused'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Kinkekaart from './pages/Kinkekaart'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'

function App() {

  return (
    <>
     < Menu />



      <Routes>
        <Route path='/' element= { <Avaleht /> } />
        <Route path='/esindused' element= { <Esindused /> } />
        <Route path='/osta-kinkekaarti' element= { <Kinkekaart /> } />
        <Route path='/lisa-toode' element= { <LisaToode /> } />
        <Route path='/seaded' element= { <Seaded /> } />
        <Route path='/ostukorv' element= { <Ostukorv /> } />
        <Route path='/kalkulaator' element= { <Kalkulaator /> } />
        <Route path='/*' element= { <NotFound /> } />

      </Routes>
    </>
  )
}

export default App
