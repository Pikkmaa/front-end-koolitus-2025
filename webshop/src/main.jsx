import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { CartSumContextProvider } from './context/CartSumContextProvider.jsx';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
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
//11. E 04.08 - Objektid, kontrollid, kokkuarvutus, toastify, otsing
//12. K 06.08 - useParams (Yksiku leht), muutmine, localStorage
//13. K 13.08 kell: 9.00 - tõlge, kaardirakendus, emaili saatmine
//14. R 15.08 kell 8.45 - API päringud, Bootstrap
//15. T 19.08 kell 8.45 - KOJU: inglise keelse Webshopi tegemine
//16. R 22.08 - admebaas KOJU. webshopi fail lõpuni
//17. T 26.08 - globaalne muutuja, makse
//18. K 03.09 - ametlik lõpukuupäev