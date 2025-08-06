import {useParams} from 'react-router-dom';
import autodFailist from '../../data/autod.json'

function YksAuto() {
    // <Route path='/yks-auto/:name' element= { <YksAuto/> } />
    const {name} = useParams(); // see võtab URL'ist muutuja
    const leitud = autodFailist.find(auto => auto.nimi === name);

    if (leitud === undefined) {
        return <div>Autot ei leitud</div>
    }

  return (
    <div>
        <div>{leitud.nimi}</div>
        <div> <img className="toote-pilt" src={leitud.pilt} alt="" /> </div>
        <div>{leitud.hind}</div>
        <div>{leitud.aktiivne === false  && <i> Toode on mitteaktiivne </i> }</div>
    </div>
  )
}

export default YksAuto