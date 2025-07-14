import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// Navigeerimiseks / URL vahetuseks:
// 1. npm i react-router-dom ---> installima sobilikud failid node_modules kausta
// 2. import { BrowserRouter } from "react-router-dom" ---> võtma node_modules kaustast võimekus
// 3. <BrowserRouter><App/><BrowserRouter/> ---> lisama võimekust App.jsx faili ümber
// 4. App.jsx failis URL / failide seosed  ---> millisel URL-l millist lehte näen

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
