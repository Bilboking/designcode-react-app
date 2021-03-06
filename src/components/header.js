import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
import logo from '../images/small-react-logo.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
   <Link to="/"><img src={logo} alt="" width="30" /></Link>
      <Link to="/page-2">Page 2  </Link>
      <Link to="/page-3">Page 3  </Link>
      <Link to="/workshops">Workshops </Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = { 
  siteTitle: ``,
}

export default Header
