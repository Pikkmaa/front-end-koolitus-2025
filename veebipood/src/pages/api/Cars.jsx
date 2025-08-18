import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Cars() {
    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100

    const [autod, setAutod] = useState([]);
    const [limit, setLimit] = useState(100);
    const limitRef = useRef();

    useEffect(() => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=" + limit)
        .then(res => res.json())
        .then(json => setAutod(json.results
        ))    
    }, [limit]);


  return (
    <div>
        <label>Autosid nimekirjas</label>
        <input ref={limitRef} type="number" />
        <button on onClick={() => setLimit(limitRef.current.value)}>Muuda limiiti</button>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Mark</th>
                    <th>Mudel</th>
                    <th>Aasta</th>
                    <th>Kütus</th>
                    <th>Käigukast</th>
                </tr>
                </thead>
            <tbody>
                {autod.map((auto, index) =>
                <tr key={auto.id || index}>
                    <td>{index + 1}</td>
                    <td>{auto.make}</td>
                    <td>{auto.model}</td>
                    <td>{auto.year}</td>
                    <td>{auto.fueltype1}</td>
                    <td>{auto.trany}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Cars