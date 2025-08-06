import {useParams, useNavigate} from 'react-router-dom'
import esindusedFailist from '../../data/esindused.json'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function MuudaEsindus() {
    const {pood} = useParams();
    const leitud = esindusedFailist[pood]
    const esindusRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();
    const navigate = useNavigate();

    function muuda() {
        if (esindusRef.current.value === "") {
            toast.error("Esinduse nimi ei tohi olla tühi");
            return;
        }
        if (aadressRef.current.value === "") {
            toast.error("Aadress ei tohi olla tühi!");
            return;
        }
        esindusedFailist[pood] = {
            "keskus": esindusRef.current.value,
            "tel": telefonRef.current.value,
            "aadress": aadressRef.current.value
    };
    navigate("/halda-esindused")

  }

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div className='vorm'>
        <label>Keskus</label>
        <input type="text" ref={esindusRef} defaultValue={leitud.keskus} />

        <label>Keskus</label>
        <input type="text" ref={aadressRef} defaultValue={leitud.aadress} />

        <label>Keskus</label>
        <input type="text" ref={telefonRef} defaultValue={leitud.tel} />
        <button onClick={muuda}>Muuda</button>
        <ToastContainer/>
    </div>
  )
}

export default MuudaEsindus