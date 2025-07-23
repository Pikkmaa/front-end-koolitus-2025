import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Menu from './components/Menu'

function App() {

  return (
    <>
      <div>
        

        <Routes>
          <Route path='' element={ < Menu /> } />
          <Route path='work' element={ < Work /> } />
          <Route path='hobbies' element={ < Hobbies /> } />
          <Route path='courses' element={ < Courses /> } />
        </Routes>

        <a className="facebook-nupp" href="https://www.facebook.com/NightFliesHard">
        <img src="/facebook.png" alt="" />
        <span>Facebook</span>
        </a>
      </div>
    </>
  )
}

export default App
