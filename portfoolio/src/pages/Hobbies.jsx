import { Link } from 'react-router-dom'
function Hobbies() {
  return (
    <div>
        <Link to="/">
        <button>Tagasi</button>
        </Link>
        <div>Harrastused</div>

        <div><strong>Aktiivne muusik</strong></div>
        <iframe
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/iZNgAKUD4PY?si=Bh4xvXsxXpucds9a" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
      </iframe>
    </div>
  )
}

export default Hobbies