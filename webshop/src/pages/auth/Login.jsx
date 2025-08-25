import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Login() {
  const {setLoggedIn} = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => setLoggedIn(true)} >Log in</button>
    </div>
  )
}

export default Login