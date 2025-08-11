import {useParams} from 'react-router-dom';
import tootajadFailist from '../../data/tootajad.json'
function YksTootaja() {
  const {name} = useParams();
  const leitud = tootajadFailist.find(tootaja => tootaja.nimi === name);

  if (leitud === undefined) {
        return <div>Töötajat ei leitud</div>
    }
  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.ametikoht}</div>
      <div>{leitud.vanus}</div>
    </div>
  )
}

export default YksTootaja