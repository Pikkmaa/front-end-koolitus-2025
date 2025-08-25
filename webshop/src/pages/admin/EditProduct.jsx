import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';

function EditProduct() {
    const {index} = useParams();
    const found = productsFromFile[index];
    const titleRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const idRef = useRef();
    const rateRef = useRef();
    const countRef = useRef();
    const categoryRef = useRef();
    const navigate = useNavigate();
    const [categories, SetCategories] = useState([]);
    const catecoriesUrl = "https://webshop-30b2a-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

    useEffect(() => {
    fetch(catecoriesUrl)
      .then(res => res.json())
      .then(json => SetCategories(json || []))

    }, []);


    if (found === undefined) {
        return <div></div>
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
            "image": imageRef.current.value,
            "id": idRef.current.value,
            "category": categoryRef.current.value,
            "rating": {
              "rate": Number(rateRef.current.value),
              "count": Number(countRef.current.value)
            }
        };
        navigate("/admin/maintain-products")
    }

  return (

    <div className='form'>
      <label>ID</label>
      <input type="text" ref={idRef} defaultValue={found.id} />

      <label>Title</label>
      <input type="text" ref={titleRef} defaultValue={found.title} />

      <label>Price</label>
      <input type="number" ref={priceRef} defaultValue={found.price} />

      <label>Image</label>
      <input type="text" ref={imageRef} defaultValue={found.image} />

      <label>Rate</label>
      <input type="number" ref={rateRef} defaultValue={found.rating.rate} />

      <label>Count</label>
      <input type="number" ref={countRef} defaultValue={found.rating.count} />

      <label>Category</label>
      <select ref={categoryRef}>
        {categories.map(category => <option>{category.name}</option>)}
      </select>

      <button onClick={() =>muuda()}>Muuda</button>
      <ToastContainer/>
    </div>
  )
}

export default EditProduct