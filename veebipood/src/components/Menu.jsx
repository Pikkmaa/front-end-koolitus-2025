import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
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
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Avaleht</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">{t("nav.cart")}</Nav.Link>
            <Nav.Link as={Link} to="/seaded">{t("nav.settings")}</Nav.Link>
            <Nav.Link as={Link} to="/email">Email</Nav.Link>
            <Nav.Link as={Link} to="/kaart">Kaart</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/osta-kinkekaarti">{t("nav.gift-cards")}</Nav.Link>
            <Nav.Link as={Link} to="/arrays">Arrays</Nav.Link>
            <Nav.Link as={Link} to="/halda">Halda</Nav.Link>
            <Nav.Link as={Link} to="/api-home">API</Nav.Link>
            <img className="ikoon" onClick={muudaKeelEN} src= {english} alt="" />
            <img className="ikoon" onClick={muudaKeelET} src= {estonian} alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;