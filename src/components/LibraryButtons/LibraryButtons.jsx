import s from "./LibraryButtons.module.scss";

import MediaQuery from "react-responsive";
import { Plus } from "assets/images/icons/Plus";

export const NextButton = ({ setNext }) => {
  return (
    <button className={s.button} onClick={() => setNext(true)}>
      <span className={s.buttonText}>Next</span>
    </button>
  );
};

export const PlusButton = ({ openModal }) => {
  <MediaQuery maxWidth={767}>
    <button className={s.phonePlusButton} onClick={() => openModal()}>
      <Plus />
    </button>
  </MediaQuery>;
};
