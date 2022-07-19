import PlaningTabl from "components/PlainingTabl";
import PlanningForm from "components/PlanningForm";
import Select from "components/Select";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Media from "react-media";
import { toast } from "react-toastify";
import { addTraining } from "redux/training/trainingOperations";
import bookSelectors from "redux/book/bookSelectors";
import s from "./TrainingData.module.scss";

const TrainingData = ({ getAmountDaysTraining, getAmountBooksTraining, showRight }) => {
    const dispatch = useDispatch();
    // const isLoading = useSelector(trainingSelectors.getIsLoading);
    const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);
    // const error = useSelector(trainingSelectors.getError);

    // Локальный стейт для получения и передачи данных из других компонентов
    const [selected, setSelected] = useState({});
    const [listPlainingBooks, setListPlainingBooks] = useState([]);
    const [showBtnAdd, setShowBtnAdd] = useState(false);
    const [booksId, setBooksId] = useState([]);
    const [startTraining, setStartTraining] = useState(0);
    const [endTraining, setEndTraining] = useState(0);
    const [valueTraining, setValueTraining] = useState({});
    const [amountOfDaysTraining, setAmountOfDaysTraining] = useState(0);
    // const [showRight, setShowRight]= useState(false);

    const addStartTraining=(e)=>{
        setStartTraining(e);
    };
    const addEndTraining=(e)=>{
        setEndTraining(e);
    };
    const addAmountOfDaysTraining=(e)=>{
        setAmountOfDaysTraining(e);
    };

    useEffect(() => {
        if (amountOfDaysTraining > 0) {
            getAmountDaysTraining(amountOfDaysTraining)
        }
    }, [amountOfDaysTraining, getAmountDaysTraining]);

    useEffect(() => {
        if (booksId.length >= 0) {
            getAmountBooksTraining(booksId.length)
        }
    }, [booksId, getAmountBooksTraining]);

    useEffect(() => {
        if (startTraining > 0 && endTraining > 0 && booksId.length > 0) {
            setValueTraining({ booksId, startTraining, endTraining })
        }
    }, [booksId, startTraining, endTraining]);

// Функция для получения из компонента Селект объекта книги (при клике по li)
    const onGetSelectBook=(book)=>{
        setSelected(book);
        setShowBtnAdd(true);
    }

    // Функция для удаления книги из списка listPlainingBooks 
    const handleDelBook = (e) => {
        const idDeletedBook = e.currentTarget.id;
        setListPlainingBooks(listPlainingBooks.filter(book => book._id !== idDeletedBook));
        setBooksId(booksId.filter(id => id !== idDeletedBook));
    };
// и возврата книги в список listGoingToRead

    // Функция для получения отфильтрованного списка книг для рендера в селекте (удаляются книги выдранные пользователем и отрендерреные в списке книг listPlainingBooks)
        const getVisibleBooks = (listGoingToRead) => {
        if (!listGoingToRead) {
            return [];
        }
        if (!listPlainingBooks) {
            return listGoingToRead;
        }
        return listGoingToRead.filter(book => book._id !== listPlainingBooks?.find(elem => elem._id === book._id)?._id
        );
    };  
    // Результатом выполнения функции является список отфильтрованный с учетом списка listPlainingBooks
    const onFilteredlistGoingToRead = getVisibleBooks(listGoingToRead);
    
    // listPlainingBooks.filter(book=>book._id=== )

    // При нажатии на кнопку Add в список книг listPlainingBooks пушится книга выбранная в инпуте селекта, сетится в стейт id книги, обнуляется стейт выбранной книги, кнопка Add становится не активной; фильтрация listGoingToRead перед передачей в селект
        const handleAddSelected = () => {
        setListPlainingBooks([...listPlainingBooks, selected]);
        const{_id}=selected;
        setBooksId([...booksId, _id?.toString()]);
        setSelected({});
        setShowBtnAdd(false);

    };

    // При клике по кнопке "Старт тренировки" сначала проверяется наличие обеих дат (начало и конец тренировки) и только после этого отправляется запрос на бек по созданию тренировки
    const clickOnStartBtn = () => {
        if (startTraining === 0 || endTraining === 0) {
            toast("Choose a start and end date for your workout",{
            className: `${s.tost__background}`,
            bodyClassName: `${s.tost__body}`,
            progressClassName: `${s.progress__bar}`
            })
            return;
        }
        dispatch(addTraining(valueTraining));
    };
    // Условие при котором рендерится кнопка Старт тренировки
    const hideBtnStart = listPlainingBooks?.length >0 ? true : false;

    return <>
        <Media queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)"}}>
            {(matches) => (
                <>
                    {matches.small && (<>
                        {showRight ? (<>
                            <PlanningForm 
                                addStartTraining={addStartTraining}
                                addEndTraining={addEndTraining}
                                addAmountOfDaysTraining={addAmountOfDaysTraining} />
                            <div className={s.select__wrapper}>
                                <Select 
                                    books={onFilteredlistGoingToRead} 
                                    selected={selected}
                                    onGetSelectBook={onGetSelectBook}/>
                                    {showBtnAdd ? (
                                        <button 
                                            type='button' 
                                            onClick={handleAddSelected} 
                                            className={s.select__button}>Add
                                        </button>) : (
                                        <button 
                                            type='button' 
                                            disabled
                                            onClick={handleAddSelected} 
                                            className={s.select__button}>Add
                                        </button>)}
                            </div> </>) : (
                        <>
                            <PlaningTabl 
                            books={listPlainingBooks} 
                            handleDelBook={handleDelBook}/>
                                    {!hideBtnStart ? null : (<>
                            <div className={s.button__wrapper}>
                                <button 
                                    type='button' 
                                    onClick={clickOnStartBtn} 
                                    className={s.start__button}>Start training
                                </button>
                            </div>
                        </>)}
                    </>)}
                </>)}
                    {matches.medium && (<>
                        <PlanningForm 
                            addStartTraining={addStartTraining}
                            addEndTraining={addEndTraining}
                            addAmountOfDaysTraining={addAmountOfDaysTraining} />
                        <div className={s.select__wrapper}>
                            <Select 
                                books={onFilteredlistGoingToRead} 
                                selected={selected}
                                onGetSelectBook={onGetSelectBook}/>
                            {showBtnAdd ? (
                                <button 
                                    type='button' 
                                    onClick={handleAddSelected} 
                                    className={s.select__button}>Add
                                </button>) : (
                                <button 
                                    type='button' 
                                    disabled
                                    onClick={handleAddSelected} 
                                    className={s.select__button}>Add
                                </button>)}
                        </div> 
                            <PlaningTabl 
                                books={listPlainingBooks} 
                                handleDelBook={handleDelBook}/>
                            {!hideBtnStart ? null : (<>
                                <div className={s.button__wrapper}>
                                    <button 
                                        type='button' 
                                        onClick={clickOnStartBtn} 
                                        className={s.start__button}>Start training
                                    </button>
                                </div>
                            </>)}
                    </>)}
                </>
            )}
            {/* {(matches) =>(<> <PlanningForm 
            addStartTraining={addStartTraining}
            addEndTraining={addEndTraining}
            addAmountOfDaysTraining={addAmountOfDaysTraining} />
        <div className={s.select__wrapper}>
            <Select 
                books={onFilteredlistGoingToRead} 
                selected={selected}
                onGetSelectBook={onGetSelectBook}/>
                {showBtnAdd ? (
                    <button 
                        type='button' 
                        onClick={handleAddSelected} 
                        className={s.select__button}>Add
                    </button>) : (
                    <button 
                        type='button' 
                        disabled
                        onClick={handleAddSelected} 
                        className={s.select__button}>Add
                    </button>)}
        </div> 
        <PlaningTabl 
            books={listPlainingBooks} 
            handleDelBook={handleDelBook}/>

        {!hideBtnStart ? null : (<>
            <div className={s.button__wrapper}>
                <button 
                    type='button' 
                    onClick={clickOnStartBtn} 
                    className={s.start__button}>Start training
                </button>
            </div>
            </>)}</>)} */}
        </Media>
    </>;
};

export default TrainingData;
