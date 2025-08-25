import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

function MaintainShops() {
  const [shops, setShops] = useState([
    { name: "Shop1", longitude: "24.75", latitude: "59.44", openTime: "09:00-18:00" }
  ]);

  const nameRef = useRef();
  const longRef = useRef();
  const latRef = useRef();
  const openTimeRef = useRef();
  const url = "https://webshop-30b2a-default-rtdb.europe-west1.firebasedatabase.app/shops.json";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setShops(json || []));
  }, []);

  function remove(index) {
    shops.splice(index, 1);
    setShops(shops.slice());
    fetch(url, { method: "PUT", body: JSON.stringify(shops) });
  }

  function add() {
    if (!nameRef.current.value || !longRef.current.value || !latRef.current.value || !openTimeRef.current.value) {
      toast.error("All fields must be filled");
      return;
    }

    const newShop = {
      name: nameRef.current.value,
      longitude: longRef.current.value,
      latitude: latRef.current.value,
      openTime: openTimeRef.current.value
    };

    shops.push(newShop);
    setShops(shops.slice());
    fetch(url, { method: "PUT", body: JSON.stringify(shops) });
  }

  return (
    <div>
      <label>Shop Name</label> <br />
      <input ref={nameRef} type="text" /> <br />

      <label>Longitude</label> <br />
      <input ref={longRef} type="text" /> <br />

      <label>Latitude</label> <br />
      <input ref={latRef} type="text" /> <br />

      <label>Open Time</label> <br />
      <input ref={openTimeRef} type="text" placeholder="09:00-21:00" /> <br />

      <button onClick={add}>Add</button>

      <div style={{ marginTop: "20px" }}>
        {shops.map((shop, index) => (
          <div key={shop.name} style={{ marginBottom: "10px" }}>
            <div>
              <strong>{shop.name}</strong> | Long: {shop.longitude} | Lat: {shop.latitude} | Open: {shop.openTime}
            </div>
            <button onClick={() => remove(index)}>x</button>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default MaintainShops;