import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="jc">
      <div className="card">
        <div>
          <div>
            <span>Oops — page not found</span>
            <h1 aria-label="404">404</h1>
            <p className="">
              The page you’re looking for moved, got renamed, or never existed.
              Try heading home or search for what you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound