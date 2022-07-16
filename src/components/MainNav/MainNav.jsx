import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Home } from "./icons/homeIcon";
import { LibraryIcon } from "./icons/libraryIcon";
import s from "./MainNav.module.scss";
import Modal from "./Modal/Modal";

const MainNav = () => {
  const userName = "Artem";
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  const openModal = () => {
    setModal({
      open: true,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

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
          <button
            className={s.logout__button}
            type="button"
            onClick={() => openModal()}
          >
            <span className={s.logout__text}>Exit</span>
          </button>
        </div>
      </section>
      {modal.open && (
        <Modal closeModal={closeModal}>
          <p>Why are you running?</p>
          <button onClick={() => closeModal()}> joke</button>
          <button> WHYYYYYY?</button>
        </Modal>
      )}
    </header>
  );
};

export default MainNav;
