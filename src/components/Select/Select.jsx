import { useState, useEffect } from "react";
import { useMouseClose } from "hooks/useCloseSelect";
import { useCloseByEsc } from "hooks/useCloseByEsc";
import ButtonIcon from "components/ButtonIcon";
import PropTypes from "prop-types";
import s from "./Select.module.scss";

const Select = ({ books, onGetSelectBook, resetInput, getFalseForReset }) => {
  const [isActive, setIsActive] = useState(false);
  const [filterBook, setFilterBook] = useState("");

  // При клике по иконке треугольника в инпуте, очищается инпут и открывается/закрывается селект
  const handleClick = () => {
    setIsActive(!isActive);
    setFilterBook("");
    getFalseForReset(false);
  };
  // Для закрытия кликом по экрану и на Esc ввели функцию closeSelect, которая передается вместе с флагом как параметры в кастомные хуки useMouseClose (который вешает слушателя на document при открытом селекте и снимает его при закрытии селекта) и useCloseByEsc
  const closeSelect = () => {
    setIsActive(false);
    setFilterBook("");
  };
  const ulRef = useMouseClose(closeSelect, isActive);

  // При нажатии на клавишу ESС селект закрывается и инпут очищается
  useCloseByEsc(closeSelect, isActive);

  // Функция для получения отфильтрованного списка книг для рендера в селекте (отбор по слову введенному в инпут)
  const getVisibleBooks = (books) => {
    if (!books) {
      return [];
    }
    if (!filterBook) {
      return books;
    }
    const normWord = filterBook.toLocaleLowerCase().trim();
    return books.filter(({ title }) =>
      title.toLocaleLowerCase().includes(normWord)
    );
  };
  // Результатом выполнения функции является список отфильтрованный по слову введенному в инпут
  const booksFiltered = getVisibleBooks(books);
  // Забрасывает в локальный стейт слово введенное в инпут
  const onChangeFilter = (e) => {
    const { value } = e.target;
    setFilterBook(value);
  };
  // Функция для очистки инпута после клика по кнопке add
  useEffect(() => {
    if (resetInput) {
      setFilterBook("");
    }
  }, [resetInput]);

  return (
    <div className={s.dropdown} ref={ulRef}>
      <div className={s.dropdown__wrapper}>
        {isActive ? (
          <input
            className={s.dropdown__input}
            type="text"
            name="filter"
            value={filterBook}
            onChange={onChangeFilter}
            placeholder="Choose books from the library"
          />
        ) : (
          <input
            readOnly
            className={s.dropdown__input}
            type="text"
            name="filter"
            value={filterBook}
            onChange={onChangeFilter}
            placeholder="Choose books from the library"
          />
        )}
        <ButtonIcon onClick={handleClick} type="caretDown" />
      </div>
      {isActive && (
        <ul className={s.dropdown__content}>
          {booksFiltered?.map((book) => (
            <li
              key={[book._id]}
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
  );
};
Select.propTypes = {
  books: PropTypes.array,
  onGetSelectBook: PropTypes.func.isRequired,
  resetInput: PropTypes.bool.isRequired,
  getFalseForReset: PropTypes.func.isRequired,
};
export default Select;
