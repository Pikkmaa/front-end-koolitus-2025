import {useParams} from 'react-router-dom'
function YksUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudisedId")) || [];
    const leitud = uudisedLS[index]
  return (
    <div>
        <div>{leitud}</div>
    </div>
  )
}

export default YksUudis