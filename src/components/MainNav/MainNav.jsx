import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Home } from "./icons/homeIcon";
import { LibraryIcon } from "./icons/libraryIcon";

import Modal from "./Modal/Modal";
import MediaQuery from "react-responsive";
import s from "./MainNav.module.scss";
import { logout } from "redux/auth/authActionThunk";
import { getUser } from "redux/auth/authSelectors";

const MainNav = ({ modalClass }) => {
  const user = useSelector(getUser);
  const userName = user.name;
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
      <section className={modalClass ? modalClass : s.header}>
        <Link to="/home" className={s.titleLink}>
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
        <Modal type="Exit" closeModal={closeModal}>
          <p className={s.exitText}>
            The changes you made will be lost if you navigate away from this
            application
          </p>
          <div className={s.modalButtonBlock}>
            <button className={s.notExit} onClick={() => closeModal()}>
              <span className={s.notExitText}>Сancel</span>
            </button>
            <button className={s.exit} onClick={() => dispatch(logout())}>
              <MediaQuery maxWidth={767}>
                <span className={s.buttonExitText}>Leave</span>
              </MediaQuery>
              <MediaQuery minWidth={768}>
                <span className={s.buttonExitText}>Leave this app</span>
              </MediaQuery>
            </button>
          </div>
        </Modal>
      )}
    </header>
  );
};

export default MainNav;
