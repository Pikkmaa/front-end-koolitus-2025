import {Link} from 'react-router-dom'

function HaldaHome() {
  return (
    <div>
        <br />
        <Link to="/halda-autod"><span className="link">Autod</span></Link>
        <Link to="/halda-esindused"><span className="link">Esindused</span></Link>
        <Link to="/halda-hinnad"><span className="link">Hinnad</span></Link>
        <Link to="/halda-kasutajad"><span className="link">Kasutajad</span></Link>
        <Link to="/halda-tootajad"><span className="link">Töötajad</span></Link>
        <Link to="/halda-tooted"><span className="link">Tooted</span></Link>
    </div>
  )
}

export default HaldaHome