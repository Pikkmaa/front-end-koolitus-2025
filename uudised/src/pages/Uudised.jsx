function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudisedId")) || [];
  return (
    <div>
    <div>See on uudiste leht, nähtav localhost:5173 aadressil</div>
    {uudised.map(uudis =>
      <div key={uudis}>
        <div>{uudis}</div>
      </div>
    )}
    {uudised.length === 0 && <div>Esimesed uudised tulevad õigepea!</div>}
    </div>
  )
}

export default Uudised