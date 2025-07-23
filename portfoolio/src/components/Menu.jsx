import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div>
        <img className="peatsi-pilt" src="https://cdn.midjourney.com/8e3ba7f3-f306-4f7f-bc09-945cbe075aee/0_1.png" alt="Muses" />
        <div>Tere! Mina olen Toomas</div>
        <div className="joon"></div>

     

      <div className="navigatsiooni-pilt">
        <Link className= "main-link" to="work">
        <img src="https://cdn.midjourney.com/da8d8899-f519-4492-a890-433b12d9817f/0_1.png" alt="" />
        <div>Varasem töökogemus</div>
        </Link>
        <Link className= "main-link" to="hobbies">
        <img src="https://cdn.midjourney.com/f96e9d36-54d9-474b-b45b-bc65531e4e09/0_0.png" alt="" />
        <div>Minu harrastused</div>
        </Link>
        <Link className= "main-link" to="courses">
        <img src="https://cdn.midjourney.com/fca61009-6669-495a-b677-4d178ac34f30/0_0.png" alt="" />
        <div>Minu koolitee</div>
        </Link>
        </div>
        <br />
    </div>
  )
}

export default Menu