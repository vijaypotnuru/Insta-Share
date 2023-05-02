import './index.css'

import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683024301/erroring_1page-not-found_d7enol.png"
      alt="page not found"
      className="not-found-img"
    />
    <h1 className="not-found-main-heading">PAGE NOT FOUND</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found
    </p>
    <p className="not-found-note">Please go back to the homepage.</p>
    <Link to="/">
      <button type="button" className="not-found-home-page-btn">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
