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
              <Steps
                title="STEP 1."
                underTitle="Create your own library"
                text="Add there books which you are going to read."
              />
              <Steps
                title="STEP 2."
                underTitle="Create your first training"
                text="Set a goal, choose period, start training."
              />
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
            <Steps
              title="STEP 1."
              underTitle="Create your own library"
              text="Add there books which you are going to read."
            />
            <Steps
              title="STEP 2."
              underTitle="Create your first training"
              text="Set a goal, choose period, start training."
            />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};
