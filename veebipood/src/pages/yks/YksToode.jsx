import {useParams} from 'react-router-dom';
import tootedFailist from '../../data/tooted.json'
function YksToode() {
  const {name} = useParams();
  const leitud = tootedFailist.find(toode => toode.nimi === name);

  if (leitud === undefined) {
        return <div>Toodet ei leitud</div>
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

export default YksToode