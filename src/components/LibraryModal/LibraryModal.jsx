import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import MediaQuery from "react-responsive";
import s from "./LibraryModal.module.scss";
import Steps from "components/Steps";

export const LibraryModal = () => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const openModal = () => {
      setModal({
        open: true,
      });
    };
    openModal();
  }, []);

  const closeModal = () => {
    setModal({
      open: false,
    });
  };

  return (
    <>
      <MediaQuery maxWidth={767}>
        {modal.open && (
          <Modal closeModal={closeModal} type="Exit">
            <div className={s.wrapper}>
              <Steps type="step-1" />
              <Steps />
              <div className={s.buttonContainer}>
                <button className={s.button} onClick={() => closeModal()}>
                  Ok
                </button>
              </div>
            </div>
          </Modal>
        )}
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className={s.bcg}>
          <div className={s.marginDiv}>
            <Steps type="step-1" />
            <Steps />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};
