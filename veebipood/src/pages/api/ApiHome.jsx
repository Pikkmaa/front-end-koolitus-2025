import {Link} from 'react-router-dom';
function ApiHome() {
  return (
    <div>
        <br />
        <Link to="/books"><span className="link">Books</span></Link>
        <Link to="/Cars"><span className="link">Cars</span></Link>
        <Link to="/Countries"><span className="link">Countries</span></Link>
        <Link to="/products1"><span className="link">Products 1</span></Link>
        <Link to="/products2"><span className="link">Products 2</span></Link>
        <Link to="/products3"><span className="link">Products 3</span></Link>
        <Link to="/vocabulary"><span className="link">Vocabulary</span></Link>
        <br /> <br />
    </div>
  )
}

export default ApiHome