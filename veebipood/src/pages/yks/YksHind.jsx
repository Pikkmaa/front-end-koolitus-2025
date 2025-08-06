import {useParams} from 'react-router-dom'
import hinnadFailist from '../../data/hinnad.json'

function YksHind() {
   // <Route path='/yks-hind/:v22rtus' element= { <YksHind /> } />
    const {v22rtus} = useParams();
    const leitud = hinnadFailist[v22rtus];

    if (leitud === undefined) {
        return <div>Hinda ei leitud</div>
    }
  
    return (
    <div>
        <div>{leitud.number}</div>
        <div>{leitud.sonana}</div>
    </div>
  )
}

export default YksHind