import {useParams} from 'react-router-dom'
import joogidFailist from '../joogid.json'
function Jook() {

    const {number} = useParams();
    const leitud = joogidFailist[number];

    if (leitud === undefined) {
        return <div>Jooki ei leitud</div>
    }
  return (
    <div>
        <div>{leitud}</div>
    </div>
  )
}

export default Jook