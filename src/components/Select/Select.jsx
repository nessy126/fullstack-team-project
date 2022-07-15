import s from "./Select.module.scss";
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Select = (props) => {
    const {books, selected, setSelected}=props;
    const [isActive, setIsActive] = useState(false);
    const [filterBook, setFilterBook]=useState('');

    const handleClick = (e) => {
        setIsActive(!isActive);
        setFilterBook('')};
        
    // const handleClickAway = () => {
    //     setIsActive(false);
    // };

    const closeSelectByEsc = useCallback(
        (e) => {if (e.code === "Escape") {
            setIsActive(false);
            setFilterBook('');
            }}, [setIsActive]);

    const getVisibleBooks = () => {
        if (!books) {
            return [];
        }
        if (!filterBook) {
            return books;
        }
        const normWord = filterBook.toLocaleLowerCase().trim();
        return books.filter(({title}) =>
            title.toLocaleLowerCase().includes(normWord)
        );
    };        

    const onChangeFilter=(e)=>{
        const{value}=e.target;
        setFilterBook(value);
    };

    useEffect(() => {
        window.addEventListener("keydown", closeSelectByEsc);
        return () => {
        window.removeEventListener("keydown", closeSelectByEsc);
        };
    }, [closeSelectByEsc]);
    
    return (
        <>
        <div  className={s.dropdown}>
            <div className={s.dropdown__wrapper} >
                <input className={s.dropdown__input}
                type="text"
                name="filter"
                value={filterBook}
                onChange={onChangeFilter}
                placeholder="Choose books from the library"/>
                <button type="button" onClick={handleClick} className={s.dropdown__btn}>
                    <IconContext.Provider
                    value={{
                    className: `${s.react__icon}`,
                    style: {
                    width: "17px",
                    height: "15px",
                    color: "#242A37",
                                        },
                    }}>
                    <AiFillCaretDown />
                </IconContext.Provider></button>
                
            </div>
        {isActive && (
        <ul className={s.dropdown__content}>
            {books?.map((book) => (
            <li key={[book._id]}
                onClick={(e) => {
                    setSelected(book.title);
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