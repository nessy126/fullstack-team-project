import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import s from "./MainNav.module.scss";
import { logout } from "redux/auth/authOperations";
import {
  getIsLogin,
  getStatusIsTraining,
  getUser,
} from "redux/auth/authSelectors";
import MainNavModal from "components/MainNavModal/MainNavModal";
import NavMenu from "components/NavMenu/NavMenu";
import LogOutNavMenu from "components/LogOutNavMenu";

const MainNav = ({ modalClass }) => {
  const logIn = useSelector(getIsLogin);
  const isTraining = useSelector(getStatusIsTraining);
  const user = useSelector(getUser);
  const userName = user?.name;
  const dispatch = useDispatch();
  const [modal, setModal] = useState({
    open: false,
  });

  const openModal = () => {
    setModal({
      open: true,
    });
  };

  const logoutButtonAction = () => {
    dispatch(logout());
    closeModal();
  };

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  return (
    <>
      {!logIn ? (
        <header className={s.authHead}>
          <section className={s.authHeader}>
            <Link to="/" className={s.authTitleLink}>
              <h1 className={s.title}>BR</h1>
            </Link>
          </section>
        </header>
      ) : (
        <section className={modalClass ? modalClass : s.header}>
          <Link
            to={isTraining ? "/training" : "/library"}
            className={s.titleLink}
          >
            <h1 className={s.title}>BR</h1>
          </Link>
          <div className={s.userBar}>
            <div className={s.accLogoTablet}>{userName?.slice(0, 1)}</div>
            <div className={s.name}>{userName}</div>
          </div>
          <div className={s.navMenuContainer}>
            <NavMenu />
            <div className={s.line}>|</div>
            <LogOutNavMenu userName={userName} openModal={openModal} />
          </div>
        </section>
      )}
      {modal.open && (
        <Modal type="exit" closeModal={closeModal}>
          <MainNavModal
            closeModal={closeModal}
            logoutButtonAction={logoutButtonAction}
          />
        </Modal>
      )}
    </>
  );
};

export default MainNav;
