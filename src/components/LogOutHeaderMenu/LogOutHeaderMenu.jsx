import s from "./LogOutHeaderMenu.module.scss";

const LogOutHeaderMenu = ({ userName, openModal }) => {
  return (
    <>
      <div className={s.accLogo}>{userName?.slice(0, 1)}</div>
      <button
        className={s.logout__button}
        type="button"
        onClick={() => openModal()}
      >
        <span className={s.logout__text}>Logout</span>
      </button>
    </>
  );
};

export default LogOutHeaderMenu;
