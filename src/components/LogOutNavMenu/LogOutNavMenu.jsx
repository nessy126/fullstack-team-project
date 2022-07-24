import s from "./LogOutNavMenu.module.scss";

const LogOutNavMenu = ({ userName,openModal }) => {

  return (
    <>
      <div className={s.accLogo}>{userName?.slice(0, 1)}</div>
      <button
        className={s.logout__button}
        type="button"
        onClick={() => openModal()}
      >
        <span className={s.logout__text}>Exit</span>
      </button>
    </>
  );
};

export default LogOutNavMenu;
