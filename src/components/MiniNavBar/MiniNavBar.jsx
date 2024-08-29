// for css
import './MiniNavBar.css'

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MiniNavBar({Contact, ContactIcons}) {
  return (
    <>
      <nav className="nav-one container flex">
        <ul className="contact links flex">
            {Contact.map((item) => {
                return (
                    <li key={item.id}>
                        <FontAwesomeIcon icon={item.icon} className="links-icon" />
                        <a href="#">{item.link}</a>
                    </li>
                )
            })}
        </ul>
        <ul className="contact icons flex">
            {ContactIcons.map((item) => {
                return (
                    <li key={item.id}>
                        <a href={item.link}><FontAwesomeIcon icon={item.icon} className="links-icon" /></a>
                    </li>
                )
            })
            
            }

        </ul>
      </nav>
    </>
  );
}
