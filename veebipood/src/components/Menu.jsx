import {Link} from 'react-router-dom' 
function Menu() {
  return (
    <div>
         <Link to= "/">
      <img className="pilt" src="https://yamahakeskus.ee/files/_page_pics_origs/burovi6804d9598ab21.jpg" alt="" />
      </Link>
      
      <Link to= "/esindused">
      <button>Esindused</button>
      </Link>

      <Link to= "/osta-kinkekaarti">
      <button>Kinkekaardid</button>
      </Link>

      <Link to= "/lisa-toode">
      <button>Lisa toode</button>
      </Link>

      <Link to= "/seaded">
      <button>Seaded</button>
      </Link>

      <Link to= "/ostukorv">
      <button>Ostukorv</button>
      </Link>

      <Link to= "/kalkulaator">
      <button>Kalkulaator</button>
      </Link>

      <Link to= "/arrays">
      <button>Arrays</button>
      </Link>

      <Link to= "/halda">
      <button>Halda</button>
      </Link>



    </div>
  )
}

export default Menu