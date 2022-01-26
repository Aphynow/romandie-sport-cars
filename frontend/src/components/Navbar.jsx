import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faNewspaper,
  faImages,
  faCalendar,
  faLink,
  faUsers,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ toggleLogin }) {
  // console.log(setOpenLogin);
  const Menu = useRef(false);

  const toggleMenu = () => {
    Menu.current.classList.toggle("hide");
  };

  return (
    <nav className="hide" ref={Menu}>
      <ul>
        <li className="toggleMenu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </li>
        <Link to="/">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="text">Accueil</span>
          </li>
        </Link>
        <Link to="/news">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <span className="text">News</span>
          </li>
        </Link>
        <Link to="/galerie">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faImages} />
            </span>
            <span className="text">Galerie</span>
          </li>
        </Link>
        <Link to="/agenda">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <span className="text">Agenda</span>
          </li>
        </Link>
        <Link to="/liens">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faLink} />
            </span>
            <span className="text">Liens</span>
          </li>
        </Link>
        <Link to="/membres">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="text">Membres</span>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="text">Contact</span>
          </li>
        </Link>
        <li onClick={toggleLogin}>
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="text">Login</span>
        </li>
      </ul>

      {/* <div className="social"> */}
      <ul>
        {/* <a href="google.ch">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>
            <span className="text">Facebook</span>
          </li>
        </a> */}
        <a
          target="_blank"
          href="https://www.instagram.com/romandie_sport_cars/"
        >
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className="text">Instagram</span>
          </li>
        </a>
      </ul>
      {/* </div> */}
    </nav>
  );
}
