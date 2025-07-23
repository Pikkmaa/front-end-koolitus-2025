import { useState } from 'react'
import { Link } from 'react-router-dom'
function Courses() {
  const [kursus, setKursus] = useState("Valimata")


  return (
    <div>

        <Link to="/"><button>Tagasi</button></Link>
        <br />

        <button className={kursus === "udemy" ? 'aktiivne-kursus' : "kursus"} onClick={() => setKursus("udemy")} >Udemy</button>
        <button className={kursus === "coursera" ? 'aktiivne-kursus' : "kursus"} onClick={() => setKursus("coursera")} >Coursera</button>
        <button className={kursus === "codecamp" ? 'aktiivne-kursus' : "kursus"} onClick={() => setKursus("codecamp")} >CodeCamp</button>
        <button className={kursus === "linkedin" ? 'aktiivne-kursus' : "kursus"} onClick={() => setKursus("linkedin")} >LinkedIn</button>
        {kursus === "udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === "coursera" && <div>Siin on kirjeldus (loend) Coursera.com läbitud kursustest</div>}
        {kursus === "codecamp" && <div>Siin on kirjeldus (loend) Freecodecamp.com läbitud kursustest</div>}
        {kursus === "linkedin" && <div>Siin on kirjeldus (loend) Linkedin.com läbitud kursustest</div>}

    </div>
  )
}

export default Courses