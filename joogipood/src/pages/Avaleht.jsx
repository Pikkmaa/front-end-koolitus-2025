import joogidFailist from '../joogid.json'
function Avaleht() {
    const joogid = joogidFailist;
  return (
    <div>
        <div>{joogid.map(jook =>
          <div>
            <span> {jook}</span>
            </div>)}
        </div>
    </div>
  )
}

export default Avaleht