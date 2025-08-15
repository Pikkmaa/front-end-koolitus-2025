import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import english from '../assets/english.png';
import estonian from '../assets/estonian.png';
function Menu() {
  const { t, i18n } = useTranslation();
  //return <h1>{t('Welcome to React')}</h1>

  function muudaKeelEN () {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  function muudaKeelET () {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }
  return (
    <div>
      <img className="ikoon" onClick={muudaKeelEN} src= {english} alt="" />
      <img className="ikoon" onClick={muudaKeelET} src= {estonian} alt="" />
         <Link to= "/">
      <img className="pilt" src="https://yamahakeskus.ee/files/_page_pics_origs/burovi6804d9598ab21.jpg" alt="" />
      </Link>
      
      <Link to= "/esindused">
      <button>{t("nav.shops")}</button>
      </Link>

      <Link to= "/osta-kinkekaarti">
      <button>{t("nav.gift-cards")}</button>
      </Link>

      <Link to= "/lisa-toode">
      <button>{t("nav.add-product")}</button>
      </Link>

      <Link to= "/seaded">
      <button>{t("nav.settings")}</button>
      </Link>

      <Link to= "/ostukorv">
      <button>{t("nav.cart")}</button>
      </Link>

      <Link to= "/kalkulaator">
      <button>{t("nav.calculator")}</button>
      </Link>

      <Link to= "/arrays">
      <button>Arrays</button>
      </Link>

      <Link to= "/halda">
      <button>Halda</button>
      </Link>

      <Link to= "/email">
      <button>Email</button>
      </Link>

      <Link to= "/kaart">
      <button>Kaart</button>
      </Link>

      <Link to= "/api-home">
      <button>API</button>
      </Link>



    </div>
  )
}

export default Menu