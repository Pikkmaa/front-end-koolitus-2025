import { useParams, useNavigate} from 'react-router-dom'
import kasutajadFailist from '../../data/kasutajad.json'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MuudaKasutaja() {
  const {name} = useParams();
  const leitud = kasutajadFailist[name];
  const nimiRef = useRef();
  const emailRef = useRef();
  const paroolRef = useRef();
  const navigate = useNavigate();

  if (leitud === undefined) {
      return <div>Kasutajat ei leitud</div>
  }

  function muuda() {
      if (nimiRef.current.value === "") {
          toast.error("Kasutajanimi ei tohi olla tühi");
          return;
      }
      if (emailRef.current.value === "") {
          toast.error("Email ei tohi olla tühi");
          return;
      }
      if (paroolRef.current.value === "") {
          toast.error("Kasutajal peab olema parool");
          return;
      }
      kasutajadFailist[name]= {
          "kasutajanimi": nimiRef.current.value,
          "email": emailRef.current.value,
          "parool": paroolRef.current.value
      };
      navigate("/halda-kasutajad")
  }


  return (
    <div className='vorm'>
        <label>Nimi</label>
        <input type="text" ref={nimiRef} defaultValue={leitud.kasutajanimi} />

        <label>Email</label>
        <input type="text" ref={emailRef} defaultValue={leitud.email} />

        <label>Parool</label>
        <input type="text" ref={paroolRef} defaultValue={leitud.parool} />
        <button onClick={muuda}>Muuda</button>
        <ToastContainer/>
    </div>
  )
}

export default MuudaKasutaja