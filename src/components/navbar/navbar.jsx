import "./navbar.css";

import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="DHB__Header-Nav_Icon">
        Dhruv Banking™️
      </Link>

      <ul>
        <li>
          {sessionStorage.getItem("refresh") === null ? (
            <Link to="/register">Register</Link>
          ) : null}
        </li>
        <li>
          {(() => {
            if (
              location.pathname === "/profile" ||
              sessionStorage.getItem("refresh") !== null
            ) {
              return (
                <>
                  <Link className="DHB__Header-Nav_Lock" to="/profile">
                    Profile <i className="fa-solid fa-user"></i>
                  </Link>
                  <Link className="DHB__Header-Nav_Lock" to="/logout">
                    Logout <i className="fa-solid fa-lock"></i>
                  </Link>
                </>
              );
            } else {
              return (
                <>
                  <Link className="DHB__Header-Nav_Lock" to="/login">
                    Login <i className="fa-solid fa-unlock"></i>
                  </Link>
                </>
              );
            }
          })()}
        </li>
      </ul>
    </nav>
  );
}
