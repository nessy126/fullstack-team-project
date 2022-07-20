import s from "./PlainingTabl.module.scss";
// import { useState } from "react";
import { MdMenuBook, MdOutlineDeleteOutline } from 'react-icons/md';
import Media from "react-media";
// import deleteIconSvg from '../../assets/svg/delete.svg';

const PlaningTabl = ({books, handleDelBook}) => {
    // const [itemDel, setItemDel] = useState({});
    const deletItemFromList =(e)=>{
        // setItemDel(e)
        handleDelBook(e)
    }
    const isLoading = false;
    const show = books?.length>0 ? true : false;
    return (
        <Media queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
        }}
        >
            {(matches) => (
            <>
            {matches.small && (show ?
            (<ul className={s.column__list}>
            {books?.map((book) => {
                return (
                    <li key={book._id} 
                        className={s.column__item}>
                        <div className={s.column__flex}>                        
                            <div className={s.column__icon}>
                            <MdMenuBook 
                            style={{ width: "22", height: "17", color: "#A6ABB9" }} />
                            </div>
                            <div className={s.column__title}>{book.title}</div>
                            <button type="button" 
                            onClick={deletItemFromList} 
                            id={book._id} 
                            className={s.column__btn}>
                            <MdOutlineDeleteOutline 
                            style={{ width: "14", height: "18", color: "#A6ABB9" }}/>
                            </button>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Author:</div>
                            <div className={s.column__left}>{book.author}</div>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Year:</div>
                            <div className={s.column__left}>{book.year}</div>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Pages:</div>
                            <div className={s.column__left}>{book.pagesTotal}</div>
                        </div>
                    </li>
                );
                })}
            </ul>):(
                    <div className={s.column__list}>
                        <div className={s.column__flex}>                        
                            <div className={s.column__icon}>
                            <MdMenuBook 
                            style={{ width: "22", height: "17", color: "#A6ABB9" }} />
                            </div>
                            <div className={s.column__title}>...</div>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Author:</div>
                            <div className={s.column__left}>...</div>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Year:</div>
                            <div className={s.column__left}>...</div>
                        </div>
                        <div className={s.column__flex}>
                            <div className={s.column__right}>Pages:</div>
                            <div className={s.column__left}>...</div>
                        </div>
                    </div>)
            )}
            {matches.medium && (
        <div className={s.table__wrapper}>
        {show ? (<>
            <div className={s.table__top}>
                <span>Book title</span>
                <span>Author</span>
                <span>Year</span>
                <span>Pages</span>
            </div>
            <div className={s.tableScrollBox}>
                {isLoading ? (
            //   <InlineLoader />
            <p>InlineLoader</p>
            ) : (
                <ul className={s.table__list}>
                {books?.map((book) => {
                    return (
                        <li key={book._id} 
                            className={s.table__item}>
                            <div className={s.table__icon}>
                                <MdMenuBook 
                                style={{ width: "22", height: "17", color: "#A6ABB9" }} />
                            </div>
                            <div className={s.table__title}>{book.title}</div>
                            <div className={s.table__author}>{book.author}</div>
                            <div className={s.table__year}>{book.year}</div>
                            <div className={s.table__pagesTotal}>{book.pagesTotal}</div>
                            <button type="button" 
                                onClick={deletItemFromList} 
                                id={book._id} 
                                className={s.table__btn}>
                                <MdOutlineDeleteOutline 
                                style={{ width: "14", height: "18", color: "#A6ABB9" }}/>
                            </button>
                        </li>
                    );
                    })}
                </ul>
                )}
            </div>
            </>
            ) : (<>
                <div className={s.table__topEmpty}>
                    <span>Book title</span>
                    <span>Author</span>
                    <span>Year</span>
                    <span>Pages</span>
                </div>
                <div className={s.table__bottomEmpty}>
                    <div className={s.table__icon}>
                                <MdMenuBook style={{ width: "22", height: "17", color: "#A6ABB9" }} />
                    </div>
                    <div className={s.table__titleEmpty}>...</div>
                </div>
                </>
            )}
        </div>
            )}
        </>
        )}
        </Media>
    );
}

export default PlaningTabl;