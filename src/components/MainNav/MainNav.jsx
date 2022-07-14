import { Link } from "react-router-dom";
import { Home } from "./icons/homeIcon";
import { LibraryIcon } from "./icons/libraryIcon";

import s from "./MainNav.module.scss";

const MainNav = () => {
  const userName = "Artem";

  return (
    <header>
      <section className={s.header}>
        <Link to="/home" className={s.link}>
          <h1 className={s.title}>BR</h1>
        </Link>
        <div className={s.userBar}>
          <div className={s.accLogoTablet}>{userName.slice(0, 1)}</div>
          <p>{userName}</p>
        </div>
        <div className={s.zaebalo}>
          <nav>
            <ul className={s.navMenu}>
              <li className={s.navItem}></li>
              <li className={s.navItem}>
                <Link to="/statistics" className={s.link}>
                  <LibraryIcon svg={s.svg} />
                </Link>
              </li>
              <li className={s.navItem}>
                <Link to="/home" className={s.link}>
                  <Home svg={s.svg} />
                </Link>
              </li>
            </ul>
          </nav>
          <div className={s.line}>|</div>
          <div className={s.accLogo}>A</div>
          <button className={s.logout__button} type="button">
            <span className={s.logout__text}>Exit</span>
          </button>
        </div>
      </section>
    </header>
  );
};

export default MainNav;
