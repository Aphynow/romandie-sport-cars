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
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Navbar() {
  const Menu = useRef(false);

  const toggleMenu = () => {
    console.log("OPEN", Menu.current);
    Menu.current.classList.toggle("hide");
  };

  return (
    <nav className="hide" ref={Menu}>
      <ul>
        <li onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span className="text">Accueil</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faNewspaper} />
          </span>
          <span className="text">News</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faImages} />
          </span>
          <span className="text">Galerie</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <span className="text">Agenda</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="text">Liens</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <span className="text">Membres</span>
        </li>
        <li>
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="text">Contact</span>
        </li>
      </ul>

      <div className="social">
        <a href="google.ch">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="google.ch">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
}
