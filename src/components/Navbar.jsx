import { NavLink } from "react-router";

import "./css/Navbar.css"

function Navbar() {


  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={`/`}
            className="default-NavLink"
            end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/about`}
            className="default-NavLink" // the text color from tailwind does'nt work
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}
            className="default-NavLink"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to={`/products`}
            className="default-NavLink"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to={`/blog`}
            className="default-NavLink"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to={`/people`}
            className="default-NavLink"
          >
            People
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar