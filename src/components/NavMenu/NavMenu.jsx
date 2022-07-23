import { Home } from "assets/images/icons/homeIcon";
import { LibraryIcon } from "assets/images/icons/libraryIcon";
import { Link } from "react-router-dom";
import s from "./NavMenu.module.scss";

const NavMenu = () => {
  return (
    <nav>
      <ul className={s.navMenu}>
        <li className={s.navItem}></li>
        <li className={s.navItem}>
          <Link to="/library" className={s.link}>
            <LibraryIcon svg={s.svg} />
          </Link>
        </li>
        <li className={s.navItem}>
          <Link to="/training" className={s.link}>
            <Home svg={s.svg} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
