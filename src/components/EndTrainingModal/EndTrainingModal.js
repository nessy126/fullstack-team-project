import Modal from "components/Modal";
import spriteSVG from "../../assets/svg/endTrainingModal/symbol-defs.svg";
import s from "./EndTrainingModal.module.scss";

const EndTrainingModal = ({ closeModal }) => {
  return (
    <Modal type="end" closeModal={closeModal}>
      <div className={s.wrapper}>
        <svg className={s.svg}>
          <use href={`${spriteSVG}#icon-thumb_up`}></use>
        </svg>
        <p className={s.text}>Well done!</p>
        <p className={s.text}>
          But you need to be a little bit faster. You can do it)
        </p>
        <button className={s.button} onClick={closeModal}>
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default EndTrainingModal;
