import {Link, Route, Routes} from 'react-router-dom'
import './App.css'
import LisaJook from './pages/LisaJook'
import HaldaJooke from './pages/HaldaJooke'
import Avaleht from './pages/Avaleht'

function App() {

  return (
    <>

    <Link to='/'>
      <button>Avalehele</button>
    </Link>

    <Link to='/lisa'>
      <button>Lisa</button>
    </Link>

    <Link to='/halda'>
      <button>Halda</button>
    </Link>

    <Routes>
          <Route path='/' element= { < Avaleht />}/>
          <Route path='/lisa' element= { < LisaJook /> }/>
          <Route path='/halda' element= { < HaldaJooke /> }/>
      </Routes>
      
    </>
  )
}

export default App
