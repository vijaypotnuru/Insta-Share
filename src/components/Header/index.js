import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Component} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {
    showMobileMenu: false,
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onShowMobileMenu = () => {
    this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu}))
  }

  render() {
    const {showMobileMenu} = this.state
    const {
      onChangeSearchInput,
      searchInput,
      getSearchResults,
      onChangeSearchMode,
      onChangeSearchModeDesktop,
      onChangeSearchModeOff,
    } = this.props
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
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={this.onShowMobileMenu}
            >
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
              <li
                className="nav-search-bar"
                onClick={onChangeSearchModeDesktop}
              >
                <input
                  onChange={onChangeSearchInput}
                  type="search"
                  className="nav-search-input"
                  placeholder="Search Caption"
                  value={searchInput}
                />
                <button
                  type="button"
                  data-testid="searchIcon"
                  className="nav-search-button"
                  onClick={getSearchResults}
                >
                  <FaSearch className="nav-search-icon" />
                </button>
              </li>
              <li className="nav-menu-item" onClick={onChangeSearchModeOff}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/my-profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
              <li
                className="nav-menu-item-mobile"
                onClick={onChangeSearchModeOff}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-menu-item-mobile" onClick={onChangeSearchMode}>
                <Link to="/" className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/my-profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="nav-menu-item-mobile-logout-btn"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </li>
              <li>
                <button
                  onClick={this.onShowMobileMenu}
                  type="button"
                  className="nav-menu-item-mobile-close-btn"
                >
                  <AiFillCloseCircle />
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    )
  }
}

export default withRouter(Header)
