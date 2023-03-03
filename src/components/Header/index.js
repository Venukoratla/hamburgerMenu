// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <>
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <div>
        <Popup
          modal
          trigger={
            <button
              type="button"
              data-testid="hamburgerIconButton"
              className="menu-button"
            >
              <GiHamburgerMenu className="bar" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="modal-container">
              <div className="button-container">
                <button
                  type="button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </div>

              <ul className="container">
                <Link to="/" onClick={() => close()} className="link">
                  <li className="home">
                    <AiFillHome className="icon" />
                    <p className="name">Home</p>
                  </li>
                </Link>

                <Link to="/about" onClick={() => close()} className="link">
                  <li className="home">
                    <BsInfoCircleFill className="icon" />
                    <p className="name">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </nav>
    <hr />
  </>
)

export default Header
