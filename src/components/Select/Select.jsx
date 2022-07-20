import s from "./Select.module.scss";
import { useState, useEffect, useCallback } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Select = ({books, onGetSelectBook}) => {
    const [isActive, setIsActive] = useState(false);
    const [filterBook, setFilterBook] = useState('');

// При нажатии на клавишу ESС селект закрывается и инпут очищается 
    const closeSelectByEsc = useCallback(
        (e) => {if (e.code === "Escape") {
            setIsActive(false);
            setFilterBook('');
            }}, [setIsActive]);

    useEffect(() => {
        window.addEventListener("keydown", closeSelectByEsc);
        return () => {
        window.removeEventListener("keydown", closeSelectByEsc);
        };
    }, [closeSelectByEsc]);

    // При клике по иконке треугольника в инпуте, очищается инпут и открывается/закрывается селект
    const handleClick = () => {
        setIsActive(!isActive);
        resetInput()};
        
    // Функция для получения отфильтрованного списка книг для рендера в селекте (отбор по слову введенному в инпут)
        const getVisibleBooks = (books) => {
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
    // Результатом выполнения функции является список отфильтрованный по слову введенному в инпут
    const booksFiltered = getVisibleBooks(books);

    // Забрасывает в локальный стейт слово введенное в инпут
    const onChangeFilter=(e)=>{
        const{value}=e.target;
        setFilterBook(value);
    };

    // Функция для очистки инпута после клика по кнопке add
    const resetInput = () => {
        setFilterBook('');
    }


    
    return (
        <>
        <div  className={s.dropdown}>
            <div className={s.dropdown__wrapper} >
                {isActive?(<input className={s.dropdown__input}
                type="text"
                name="filter"
                value={filterBook}
                onChange={onChangeFilter}
                placeholder="Choose books from the library"/>):
                (<input className={s.dropdown__input}
                    readOnly
                    type="text"
                    name="filter"
                    value={filterBook}
                    onChange={onChangeFilter}
                    placeholder="Choose books from the library"/>)}
                <button type="button" onClick={handleClick} className={s.dropdown__btn}>
                    <IconContext.Provider
                    value={{
                    className: `${s.react__icon}`,
                    style: {
                    width: "17px",
                    height: "15px",
                        },
                    }}>
                    <AiFillCaretDown />
                </IconContext.Provider></button>
                
            </div>
        {isActive && (
        <ul className={s.dropdown__content}>
            {booksFiltered?.map((book) => (
            <li key={[book._id]}
                onClick={(e) => {
                    setFilterBook(book.title);
                    setIsActive(false);
                    onGetSelectBook(book);
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