import s from "./Select.module.scss";
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Select = (props) => {
    const {books, selected, setSelected}=props;
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => setIsActive(!isActive);
    // const handleClickAway = () => {
    //     setIsActive(false);
    // };
    const closeSelectByEsc = useCallback(
        (e) => {if (e.code === "Escape") {
            setIsActive(false);
                }
            }, [setIsActive]
    );
    useEffect(() => {
        window.addEventListener("keydown", closeSelectByEsc);
        return () => {
        window.removeEventListener("keydown", closeSelectByEsc);
        };
    }, [closeSelectByEsc]);
    
    return (
        <>
        <div  className={s.dropdown}>
            <div className={s.dropdown__btn} onClick={handleClick}>
                <p className={s.dropdown__text} placeholder="Choose books from the library">{selected}</p>
                <IconContext.Provider
                    value={{
                    className: `${s.react__icon}`,
                    style: {
                    width: "17px",
                    height: "15px",
                    color: "#242A37",
                    },
                    }}
                >
                    <AiFillCaretDown />
                </IconContext.Provider>
            </div>
        {isActive && (
        <ul className={s.dropdown__content}>
            {books?.map((book) => (
            <li key={[book.id]}
                onClick={(e) => {
                    setSelected(book.id);
                    setIsActive(false);
                }}
                className={s.dropdown__item}
            >
                {book.title}
            </li>
            ))}
            </ul>
        )}
        </div>
    </>
    );
}

export default Select;