import {Link} from 'react-router-dom'
import joogidFailist from '../joogid.json'
function Avaleht() {
    const joogid = joogidFailist;
  return (
    <div>
        <div>{joogid.map((jook, index) =>
          <div>
            <Link to={"/jook/" + index}>
            <span> {jook}</span>
            </Link>
            </div>)}
        </div>
    </div>
  )
}

export default Avaleht