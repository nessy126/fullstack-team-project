import MediaQuery from "react-responsive";
import s from "./HeaderModal.module.scss";

const HeaderModal = ({ closeModal, logoutButtonAction }) => {
  return (
    <>
      <p className={s.exitText}>
        The changes you made will be lost if you navigate away from this
        application
      </p>
      <div className={s.modalButtonBlock}>
        <button className={s.notExit} onClick={() => closeModal()}>
          <span className={s.notExitText}>Сancel</span>
        </button>
        <button className={s.exit} onClick={() => logoutButtonAction()}>
          <MediaQuery maxWidth={767}>
            <span className={s.buttonExitText}>Leave</span>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <span className={s.buttonExitText}>Leave this app</span>
          </MediaQuery>
        </button>
      </div>
    </>
  );
};

export default HeaderModal;
