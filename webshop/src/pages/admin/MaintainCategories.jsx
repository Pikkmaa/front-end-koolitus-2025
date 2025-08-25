import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';


function MaintainCategories() {
  const [categories, setCategories] = useState([{"name": "electronics"}, {"name": "jewelery"}]);
  const nameRef = useRef();
  const url = "https://webshop-30b2a-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []))      
  }, []);

  function remove(index) {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(url, {method: "PUT", body: JSON.stringify(categories)});
  }

  function add() {
    if (nameRef.current.value === "") {
        toast.error("Category name field can't be empty");
        return;
    }
    categories.push({
      "name": nameRef.current.value});
    setCategories(categories.slice());
    fetch(url, {method: "PUT", body: JSON.stringify(categories)})
  }

  return (
    <div>
      <label>Category name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <button onClick={add} >Add</button>

      {categories.map((category, index) =>
      <div key={category.name}>
      <div>{category.name} </div>
      <button onClick={() => remove(index)}>x</button>
      </div>
       )}
      <ToastContainer/>
    </div>
  )
}

export default MaintainCategories