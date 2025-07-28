import { Link } from "react-router-dom"

function ArraysHome() {
  return (
    <div>
        <br />
        <Link to="/autod"><span className="link">Autod</span></Link>
        <Link to="/esindused"><span className="link">Esindused</span></Link>
        <Link to="/hinnad"><span className="link">Hinnad</span></Link>
        <Link to="/kasutajad"><span className="link">Kasutajad</span></Link>
        <Link to="/tootajad"><span className="link">Töötajad</span></Link>
        <Link to="/tooted"><span className="link">Tooted</span></Link>
        <br /> <br />
    </div>
  )
}

export default ArraysHome