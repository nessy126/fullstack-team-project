import React from "react";
import PropTypes from "prop-types";

import spriteSVG from "assets/images/sprite.svg";

import s from "./ListDescription.module.scss";

const ListDescription = ({ list }) => {
  return (
    <>
      <ul className={s.list}>
        {list &&
          list?.map((el) => (
            <li key={el} className={s.item}>
              <svg className={s.iconVector}>
                <use href={`${spriteSVG}#vector`}></use>
              </svg>
              <span className={s.element}>{el}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListDescription;

ListDescription.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired),
};
