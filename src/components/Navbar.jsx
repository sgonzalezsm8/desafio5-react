import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { formatNumberToES } from "../utils/format-numbers";


const Navbar = () => {
  const total = 25000;

  return (
    <>
     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ff6347' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <FontAwesomeIcon icon={faPizzaSlice} className="me-2" /> Pizzería Mamma Mía
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">Profile</Link>
            </li>
          </ul>
          <Link className="btn btn-light" to="/cart">
          <FaShoppingCart /> Total: ${formatNumberToES(total)}
          </Link>
        </div>
      </div>
    </nav>

        
    
    </>
  );
  
}

export default Navbar;