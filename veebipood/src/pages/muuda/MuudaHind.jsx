import {useParams, useNavigate} from 'react-router-dom'
import hinnadFailist from '../../data/hinnad.json'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MuudaHind() {
    const {v22rtus} = useParams();
    const leitud = hinnadFailist[v22rtus];
    const hindRef = useRef();
    const sonaRef = useRef();
    const navigate = useNavigate();

    if (leitud === undefined) {
        return <div>Hinda ei leitud</div>
    }

    function muuda(){
        if (hindRef.current.value <= 0) {
            toast.error("Hind peab olema positiivne!");
                return;
        }
        if (sonaRef.current.value === "") {
            toast.error("Hind peab olema kirjeldatud sõnana");
            return;
        }
        hinnadFailist[v22rtus]= 
        {
        "number": Number(hindRef.current.value),
        "sonana": sonaRef.current.value
        }
        navigate("/halda-hinnad");

    }

  return (
    <div>
    <div className='vorm'>
        <label>Hind</label>
        <input type="text" ref={hindRef} defaultValue={leitud.number} />

        <label>Hind</label>
        <input type="text" ref={sonaRef} defaultValue={leitud.sonana} />
        <button onClick={muuda}>Muuda</button>
        
    </div>
    <ToastContainer/>
    </div>
  )
}

export default MuudaHind