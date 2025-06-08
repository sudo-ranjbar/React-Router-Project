import { NavLink } from "react-router";

function Navbar() {

  const productActiveState = ({ isActive }) => {
    return isActive ?
      {
        color: 'yellow',
        fontSize: '8px',
      } :
      {}
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={`/`} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/about`} >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}
            className={({ isActive }) => isActive ? "new-active" : ""}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to={`/products`}
            style={productActiveState}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to={`/stores`}
            style={({ isActive }) => isActive ? { color: "red" } : {}}
          >
            Stores
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar