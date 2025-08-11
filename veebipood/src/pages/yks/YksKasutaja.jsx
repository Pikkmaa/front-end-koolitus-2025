import {useParams} from 'react-router-dom';
import kasutajadFailist from '../../data/kasutajad.json'
function YksKasutaja() {
  const {name} = useParams();
  const leitud = kasutajadFailist.find(kasutaja => kasutaja.kasutajanimi === name);

  if (leitud === undefined) {
        return <div>Kasutajat ei leitud</div>
    }

  return (
    <div>
      <div>{leitud.kasutajanimi}</div>
        <div>{leitud.email}</div>
        <div>{leitud.parool}</div>
    </div>
  )
}

export default YksKasutaja