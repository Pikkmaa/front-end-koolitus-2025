import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

function EditProduct() {
  const {index} = useParams();
    const found = productsFromFile[index];
    const titleRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const navigate = useNavigate();


    if (found === undefined) {
        return <div>Autot ei leitud</div>
    }

    function muuda() {
        if (titleRef.current.value === "") {
            toast.error("Auto nimi ei tohi olla tühi");
            return;
        }
        if (priceRef.current.value <= 0) {
            toast.error("Hind peab olema positiivne!");
            return;
        }
        productsFromFile[index]= {
            "title": titleRef.current.value,
            "price": Number(priceRef.current.value),
            "image": imageRef.current.value
        };
        navigate("/admin/maintain-products")
    }

  return (
    <div className='form'>
      <label>Title</label>
      <input type="text" ref={titleRef} defaultValue={found.title} />

      <label>Price</label>
      <input type="number" ref={priceRef} defaultValue={found.price} />

      <label>Image</label>
      <input type="text" ref={imageRef} defaultValue={found.image} />

      <button onClick={() =>muuda()}>Muuda</button>
      <ToastContainer/>
    </div>
  )
}

export default EditProduct