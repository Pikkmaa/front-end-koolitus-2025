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


// 4 esimest päeva Indrekuga
// 5. 14.07 - react-router-dom, useState algus
// 6. 16.07 - useRef, funktsioonid, dünaamiline CSS klass, alamkomponendid
// 7. 21.07 - kalkulaator
// 8. 23.07 - DISAINER
// 9. E 28.07 - arrays, tabel
//10. N 31.07 - kustutamine, lisamine, fail, objektid
//11. E 04.08 - Objektid, kontrollid, kokkuarvutus, postify, otsing
//12. K 06.08
//13. T 12.08
//14. R 15.08
//15. E 18.08
//16. N 20.08
//17. E 25.08
//18. K 03.09 - ametlik lõpukuupäev
