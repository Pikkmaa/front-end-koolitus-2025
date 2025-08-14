import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'

function App() {

  return (
    <>
    <div>
      <Link to="/">
        <button>Tere</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>

      <Link to="/tagasiside-andjad">
        <button>Tagasisidestajad</button>
      </Link>
        

        <Routes>
          <Route path='/' element={<div>Tere</div>} />
          <Route path='/tagasiside' element={< Tagasiside />} />
          <Route path='/tagasiside-andjad' element={< TagasisideAndjad />} />
        </Routes>

      </div>


    </>
  )
}

export default App
