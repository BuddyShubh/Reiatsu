import { Link } from "react-router-dom";
import "../style/sections/Header.scss";
import SearchBar from "../components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <span className="nav-align-item-left">
            <li>
              <span>
                <FontAwesomeIcon icon={faBars} />
              </span>
            </li>
            <li>
              <span className="logo">
                <Link to="/">Reiatsu</Link>
              </span>
            </li>
          </span>
          <span className="nav-align-item-right">
            <li>
              <SearchBar />
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
