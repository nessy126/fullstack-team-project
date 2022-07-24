import s from "./LibraryButtons.module.scss";

import MediaQuery from "react-responsive";
import { Plus } from "assets/images/icons/Plus";
import { Link } from "react-router-dom";

export const NextButton = ({ setNext }) => {
  return (
    <Link to={"/training"} className={s.button}>
      <span className={s.buttonText}>Next</span>
    </Link>

    // <button className={} onClick={() => setNext(true)}>

    // </button>
  );
};

export const PlusButton = ({ openModal }) => {
  <MediaQuery maxWidth={767}>
    <button className={s.phonePlusButton} onClick={() => openModal()}>
      <Plus />
    </button>
  </MediaQuery>;
};
