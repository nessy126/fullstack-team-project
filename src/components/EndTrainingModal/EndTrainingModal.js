import PropTypes from "prop-types";
import Modal from "components/Modal";
import spriteSVG from "../../assets/svg/endTrainingModal/symbol-defs.svg";
import { MODAL_TYPES } from "assets/helpers/modal";
import s from "./EndTrainingModal.module.scss";

const EndTrainingModal = ({ closeModal, modalType }) => {
  return (
    <Modal type="end" closeModal={closeModal}>
      <div className={s.wrapper}>
        <svg className={s.svg}>
          <use href={`${spriteSVG}#icon-thumb_up`}></use>
        </svg>
        {modalType === MODAL_TYPES.OUT_OF_TIME && (
          <>
            <p className={s.text}>Well done!</p>
            <p className={s.text}>
              But you need to be a little bit faster. You can do it)
            </p>
          </>
        )}
        {modalType === MODAL_TYPES.IN_TIME && (
          <>
            <p className={s.text}>Good work!</p>
            <p className={s.text}>Waiting for your next training!</p>
          </>
        )}
        <button className={s.button} onClick={closeModal}>
          Ok
        </button>
      </div>
    </Modal>
  );
};

EndTrainingModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalType: PropTypes.string,
};

export default EndTrainingModal;
