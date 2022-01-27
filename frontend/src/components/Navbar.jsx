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
  faCog,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

export default function Navbar({ toggleLogin }) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
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

        {cookies.user ? (
          <>
            <Link to={`/profil/${cookies.user.id}`}>
              <li>
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="text">Profil</span>
              </li>
            </Link>
            <li
              onClick={() => {
                removeCookie("user", { path: "/" });
              }}
            >
              <span className="icon">
                <FontAwesomeIcon icon={faPowerOff} />
              </span>
              <span className="text">Logout</span>
            </li>
          </>
        ) : (
          <li onClick={toggleLogin}>
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="text">Login</span>
          </li>
        )}
      </ul>
      <ul>
        <Link to="/admin">
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faCog} />
            </span>
            <span className="text">Admin</span>
          </li>
        </Link>
      </ul>

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
          rel="noreferrer"
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
    </nav>
  );
}
