//Navlink provide us an active class in a function to add or remove styling
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => { return `nav-link ${isActive ? "text-success" : "text-danger"} `; }} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/User/user1">User1</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/User/user2">User2</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Filter">Filter</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
