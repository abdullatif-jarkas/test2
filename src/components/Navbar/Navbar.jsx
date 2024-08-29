import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const icon = faCalendar;

function Navbar({ logo, links }) {
  const [active, setActive] = useState("home");
  const [state, setState] = useState(false);

  const handleActive = (e) => {
    setActive(e);
  };
  const handleClick = () => {
    setState(!state);
  };
  return (
    <nav className="nav-two container flex">
      <h1 className="logo">{logo}</h1>

      <ul
        id="nav-items"
        className={state ? "#nav-items nav-active" : "#nav-items"}
      >
        {links.map((item, index) =>
          index === links.length - 1 ? (
            <li key={index} className="schedule">
              <FontAwesomeIcon icon={icon} className="schedule-icon" />
              <Link to={item.to}>{item.title}</Link>
            </li>
          ) : (
            <li key={index}>
              <Link
                onClick={() => {
                  handleActive(item.title);
                  handleClick();
                }}
                className={active == item.title ? "active" : ""}
                to={item.to}
              >
                {item.title}
              </Link>
            </li>
          )
        )}
        <li>
          <FontAwesomeIcon
            className="nav-icon x-icon"
            icon={faXmark}
            onClick={handleClick}
          />
        </li>
      </ul>

      <div className="for-responsive">
        <FontAwesomeIcon
          className="nav-icon"
          icon={faBars}
          onClick={handleClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
