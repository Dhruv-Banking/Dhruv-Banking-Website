import "./footer.css";

import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer>
      <div className="DHB__Footer-Links">
        <h3>Useful Links</h3>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QDia3e12czc"
            >
              Never
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QDia3e12czc"
            >
              Gonna
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QDia3e12czc"
            >
              Give
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QDia3e12czc"
            >
              You
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QDia3e12czc"
            >
              Up
            </a>
          </li>
        </ul>
      </div>

      <div className="DHB__Footer-Social_Links">
        <h3>Social Links</h3>

        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
