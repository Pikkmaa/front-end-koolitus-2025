import { useEffect, useState } from "react";

function Products3() {

    const [tooted, setTooted] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=20")
        .then(res => res.json())
        .then(json => setTooted(json.products))    
    }, []);
  return (
    <div>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Index</th>
                    <th>Toote nimi</th>
                    <th>Hind</th>
                    <th>Kategooria</th>
                    <th>Pilt</th>
                    <th>Reiting</th>
                </tr>
                </thead>
            <tbody>
                {tooted.map((toode, index) =>
                <tr key={toode.id}>
                    <td>{toode.id}.</td>
                    <td>{index}</td>
                    <td>{toode.title}</td>
                    <td>{toode.price}</td>
                    <td>{toode.category}</td>
                    <td><img className="halda-toote-pilt" src={toode.thumbnail} alt="" /></td>
                    <td>{toode.rating}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Products3