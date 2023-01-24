import "./navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let [icon, setIcon] = useState("fa-solid fa-lock");

  return (
    <nav>
      <Link to="/" className="DHB__Header-Nav_Icon">
        Dhruv Banking™️
      </Link>

      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link className="DHB__Header-Nav_Lock" to="/login">
            Login <i className={icon}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
