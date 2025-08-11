import { useParams, useNavigate} from 'react-router-dom'
import tootajadFailist from '../../data/tootajad.json'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MuudaTootaja() {
  const {name} = useParams();
  const leitud = tootajadFailist[name];
  const nimiRef = useRef();
  const vanusRef = useRef();
  const ametRef = useRef();
  const navigate = useNavigate();

  if (leitud === undefined) {
      return <div>Töötajat ei leitud</div>
  }

  function muuda() {
      if (nimiRef.current.value === "") {
          toast.error("Töötaja nimi ei tohi olla tühi");
          return;
      }
      if (vanusRef.current.value <= 0) {
          toast.error("Vanus peab olema positiivne!");
          return;
      }
      tootajadFailist[name]= {
          "nimi": nimiRef.current.value,
          "vanus": Number(vanusRef.current.value),
          "ametikoht": ametRef.current.value
      };
      navigate("/halda-tootajad")
  }


  return (
    <div className='vorm'>
        <label>Nimi</label>
        <input type="text" ref={nimiRef} defaultValue={leitud.nimi} />

        <label>Vanus</label>
        <input type="number" ref={vanusRef} defaultValue={leitud.vanus} />

        <label>Ametikoht</label>
        <input type="text" ref={ametRef} defaultValue={leitud.ametikoht} />
        <button onClick={muuda}>Muuda</button>
        <ToastContainer/>
    </div>
  )
}

export default MuudaTootaja