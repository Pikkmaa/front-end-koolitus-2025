import { useRef } from "react";
import { useEffect, useState } from "react";

function Books() {

    const [tooted, setTooted] = useState([]);
    const [page, setPage] = useState(1)
    const otsiRef = useRef()
    const [otsitav, setOtsitav] = useState("react")

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/" + otsitav + "?page=" + page)
        .then(res => res.json())
        .then(json => setTooted(json.books))    
    }, [otsitav, page]);

    function otsi() {
        if (otsiRef.current.value < 2) {
            return;
        }
        setOtsitav(otsiRef.current.value);
    }



  return (
    <div>
        <label>otsi</label>
        <input onChange={otsi} ref={otsiRef} type="text" />

        <button onClick={()=> setPage(page -1)}>Previous</button>
        <span>{page}</span>
        <button onClick={()=> setPage(page +1)}>Next</button>
        <table className="halda-tabel">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Index</th>
                    <th>Raamatu nimi</th>
                    <th>Hind</th>
                    <th>Alapealkiri </th>
                    <th>Pilt</th>

                </tr>
                </thead>
            <tbody>
                {tooted.map((toode, index) =>
                <tr key={toode.isbn13}>
                    <td>{toode.isbn13}</td>
                    <td>{index}</td>
                    <td>{toode.title}</td>
                    <td>{toode.price}</td>
                    <td>{toode.subtitle}</td>
                    <td><img className="halda-toote-pilt" src={toode.image} alt="" /></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Books