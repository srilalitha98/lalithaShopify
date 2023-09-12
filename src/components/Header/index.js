import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiFillCloseCircle, AiOutlineCaretDown} from 'react-icons/ai'
import './index.css'

class Header extends Component {
  state = {openMenu: false}

  toggleOpenMenu = () => {
    this.setState(prevState => ({openMenu: !prevState.openMenu}))
  }

  render() {
    const {openMenu} = this.state
    return (
      <nav>
        <div className="sm-device-header">
          <img
            src="https://res.cloudinary.com/dorxlq21m/image/upload/v1694479137/Shopify-Logo_e3ej4t.png"
            alt="website logo"
            className="website-logo"
          />
          <div>
            <Link to="/free-trail" className="link-text">
              Start free trail
            </Link>
            {openMenu ? (
              <button
                type="button"
                onClick={this.toggleOpenMenu}
                className="menu-button"
              >
                <AiFillCloseCircle size={35} />
              </button>
            ) : (
              <button
                type="button"
                onClick={this.toggleOpenMenu}
                className="menu-button"
              >
                <FaBars size={20} />
              </button>
            )}
            {openMenu && (
              <div>
                <ul className="nav-items-cont">
                  <li>Solutions</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
                <button type="button">Login</button>
                <button type="button">Start free trail</button>
              </div>
            )}
          </div>
        </div>
        <div className="lg-device-header">
          <img
            src="https://res.cloudinary.com/dorxlq21m/image/upload/v1694479137/Shopify-Logo_e3ej4t.png"
            alt="website logo"
            className="website-logo"
          />
          <ul className="list-items-cont">
            <li className="item-cont">
              <p>Solutions</p>
              <AiOutlineCaretDown />
            </li>
            <li>Pricing</li>
            <li className="item-cont">
              <p>Resources</p>
              <AiOutlineCaretDown />
            </li>
          </ul>
          <div className="buttons-container">
            <button type="button" className="login-btn">
              Log in
            </button>
            <button type="button" className="free-trial-btn">
              Start free trial
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
