import './App.css'

function App() {

  return (
    <>

    Guugelda CSS-i (märksõnadega näiteks: „css make text underline“ / „css align text right“ / „css change … „ /

    <div><button className='roheline-nupp'>Helehall tekst</button></div>

    <p className="sinine-tekst">See on sinine kaldkirjas tekst</p>

    <p className="roheline-tekst"><strong>See on roheline rasvane tekst</strong></p>

    <img className="pilt" src="https://cdn.midjourney.com/babacb61-67ee-4f4f-a1e4-013d116132fb/0_0.png" alt="Auto"/>

    <div>  
    <table className='tabel'>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>
    </div>

    </>
  )
}

export default App
