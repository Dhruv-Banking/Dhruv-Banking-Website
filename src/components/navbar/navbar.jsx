import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <Link to="#" className="DHB__Header-Nav_Icon">
        Dhruv Banking™️
      </Link>

      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link className="DHB__Header-Nav_Lock" to="/login">
            Login <i className="fa-solid fa-lock"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
