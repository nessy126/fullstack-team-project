import { useEffect, useState } from "react";
import { BotRightArrow } from "../../assets/images/icons/botRightArrow";
import { FirstBook } from "../../assets/images/icons/FirstBook";
import { Flag } from "../../assets/images/icons/flag";
import Modal from "../Modal/Modal";
import MediaQuery from "react-responsive";
import s from "./LibraryModal.module.scss";

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
            <div>
              <h2 className={s.titlesMargin}>
                <strong className={s.titles}>STEP 1.</strong>
              </h2>
              <div>
                <div className={s.textBlock}>
                  <FirstBook />
                  <h3 className={s.underTitle}>Create your own library</h3>
                </div>
                <div className={s.textBl}>
                  <BotRightArrow />
                  <p className={s.text}>
                    Add there books which you are going to read.
                  </p>
                </div>
              </div>
              <h2 className={s.titlesMargin}>
                <strong className={s.titles}>STEP 2.</strong>
              </h2>
              <div className={s.textBlock}>
                <Flag />
                <h3 className={s.underTitle}>Create your first training</h3>
              </div>
              <div className={s.textBl}>
                <BotRightArrow />
                <p className={s.text}>
                  Set a goal, choose period, start training.
                </p>
              </div>
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
            <h2 className={s.titlesMargin}>
              <strong className={s.titles}>STEP 1.</strong>
            </h2>
            <div>
              <div className={s.textBlock}>
                <FirstBook />
                <h3 className={s.underTitle}>Create your own library</h3>
              </div>
              <div className={s.textBl}>
                <BotRightArrow />
                <p className={s.text}>
                  Add there books which you are going to read.
                </p>
              </div>
            </div>
            <h2 className={s.titlesMargin}>
              <strong className={s.titles}>STEP 2.</strong>
            </h2>
            <div className={s.textBlock}>
              <Flag />
              <h3 className={s.underTitle}>Create your first training</h3>
            </div>
            <div className={s.textBl}>
              <BotRightArrow />
              <p className={s.text}>
                Set a goal, choose period, start training.
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};
