import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/" className="nav-bar-website-logo-link">
            <img
              className="nav-website-logo"
              src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1682664216/Standard_Collection_8website-logo-sm_rj35e0.png"
              alt="website logo"
            />
            <h1 className="nav-website-name">Insta Share</h1>
          </Link>
          <button type="button" className="nav-mobile-btn">
            <GiHamburgerMenu className="nav-mobile-menu-icon" />
          </button>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/" className="nav-bar-website-logo-link">
            <img
              className="nav-website-logo"
              src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1682664216/Standard_Collection_8website-logo-sm_rj35e0.png"
              alt="website logo"
            />
            <h1 className="nav-website-name">Insta Share</h1>
          </Link>
          <ul className="nav-menu">
            <li className="nav-search-bar">
              <input
                type="search"
                className="nav-search-input"
                placeholder="Search Caption"
              />
              <button
                type="button"
                data-testid="searchIcon"
                className="nav-search-button"
              >
                <FaSearch className="nav-search-icon" />
              </button>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
