import { useParams, useNavigate} from 'react-router-dom'
import autodFailist from '../../data/autod.json'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MuudaAuto() {
    const {name} = useParams();
    const leitud = autodFailist[name];
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();
    const navigate = useNavigate();


    if (leitud === undefined) {
        return <div>Autot ei leitud</div>
    }

    function muuda() {
        if (nimiRef.current.value === "") {
            toast.error("Auto nimi ei tohi olla tühi");
            return;
        }
        if (hindRef.current.value <= 0) {
            toast.error("Hind peab olema positiivne!");
            return;
        }
        autodFailist[name]= {
            "nimi": nimiRef.current.value,
            "hind": Number(hindRef.current.value),
            "aktiivne": aktiivneRef.current.checked,
            "pilt": piltRef.current.value
        };
        navigate("/halda-autod")
    }

  return (
    <div className='vorm'>
        <label>Nimi</label>
        <input type="text" ref={nimiRef} defaultValue={leitud.nimi} />

        <label>Hind</label>
        <input type="number" ref={hindRef} defaultValue={leitud.hind} />

        <label>Pilt</label>
        <input type="text" ref={piltRef} defaultValue={leitud.pilt} />

        <label>Aktiivne</label>
        <input type="checkbox" ref={aktiivneRef} defaultValue={leitud.aktiivne} /> 
        <button onClick={muuda}>Muuda</button>
        <ToastContainer/>
    </div>
  )
}

export default MuudaAuto