import s from "./LibraryButtons.module.scss";

import MediaQuery from "react-responsive";

import { Link } from "react-router-dom";
import { Plus } from "assets/images/icons/Plus";

export const NextButton = () => {
  return (
    <Link to={"/training"} className={s.button}>
      <span className={s.buttonText}>Next</span>
    </Link>
  );
};

export const PlusButton = ({ openModal }) => {
  <MediaQuery maxWidth={767}>
    <button className={s.phonePlusButton} onClick={() => openModal()}>
      <Plus />
    </button>
  </MediaQuery>;
};
