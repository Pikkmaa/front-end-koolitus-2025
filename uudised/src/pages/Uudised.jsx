import {Link} from 'react-router-dom'
function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudisedId")) || [];
  return (
    <div>
    <div>See on uudiste leht, nähtav localhost:5173 aadressil</div>
    {uudised.map((uudis, index )=>
      <div key={uudis}>
        <Link to={"/uudis/" + index}>
        <div>{uudis}</div>
        </Link>
      </div>
    )}
    {uudised.length === 0 && <div>Esimesed uudised tulevad õigepea!</div>}
    </div>
  )
}

export default Uudised