import PlaningTabl from "components/PlainingTabl";
import PlanningForm from "components/PlanningForm";
import Select from "components/Select";
import { useState, useEffect } from "react";
import s from "./TrainingData.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {addTraining} from "redux/training/trainingOperations";
import bookSelectors from "redux/book/bookSelectors";
import trainingSelectors from "redux/training/trainingSelectors";

const TrainingData = ({getAmountDaysTraining, getAmountBooksTraining}) => {

const dispatch=useDispatch()
    // const isLoading = useSelector(trainingSelectors.getIsLoading);
    const listGoingToRead = useSelector(bookSelectors.getListGoingToRead);
    // const error = useSelector(trainingSelectors.getError);

    // Локальный стейт для получения и передачи данных из других компонентов
    const [selected, setSelected]=useState({});
    const [listPlainingBooks, setListPlainingBooks] = useState([]);
    const [showBtnAdd, setShowBtnAdd] = useState(false);
    const [booksId, setBooksId]=useState([]);
    const [startTraining, setStartTraining]=useState(0);
    const [endTraining, setEndTraining]=useState(0);
    const [valueTraining, setValueTraining] = useState({});
    const [amountOfDaysTraining, setAmountOfDaysTraining]=useState(0);

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
        if (startTraining > 0 && endTraining > 0 && booksId.length > 0) {
            setValueTraining({ booksId, startTraining, endTraining })
        }
    }, [booksId, startTraining, endTraining]);

// Функция для получения из компонента Селект объекта книги (при клике по li)
    const onGetSelectBook=(book)=>{
        setSelected(book);
        setShowBtnAdd(true);
    }

    const handleDelBook =(id)=>{
        const newListBooks=listGoingToRead.filter(book=>book.id!==id);
        return newListBooks;
    }

    // При нажатии на кнопку Add в список книг listPlainingBooks пушится книга выбранная в инпуте селекта, сетится в стейт id книги, обнуляется стейт выбранной книги
    const handleSelect = () => {
        setListPlainingBooks([...listPlainingBooks, selected]);
        const{_id}=selected;
        setBooksId([...booksId, _id.toString()]);
        setSelected({});
    };

    const clickOnStartBtn =()=>{
        try {
            dispatch(addTraining(valueTraining));
        } catch (error) {
            console.log(error)
        }
    }

const hideBtnStart = listPlainingBooks?.length >0 ? true : false;

const activBtnStart= startTraining>0 && endTraining>0 && booksId.length>0 ? true : false;


    return <>
            <PlanningForm 
            addStartTraining={addStartTraining}
            addEndTraining={addEndTraining}
            addAmountOfDaysTraining={addAmountOfDaysTraining} />
        <div className={s.select__wrapper}>
            <Select 
                books={listGoingToRead} 
                selected={selected}
                onGetSelectBook={onGetSelectBook}/>
                {showBtnAdd ? (
                    <button 
                        type='button' 
                        onClick={handleSelect} 
                        className={s.select__button}>Add
                    </button>) : (
                    <button 
                        type='button' 
                        disabled
                        onClick={handleSelect} 
                        className={s.select__button}>Add
                    </button>)}
        </div> 
        <PlaningTabl 
            books={listPlainingBooks} 
            handleDelBook={handleDelBook}/>

        {!hideBtnStart ? null:(<div className={s.button__wrapper}>
            <button 
                type='button' 
                
                onClick={clickOnStartBtn} 
                className={s.start__button}>Start training
            </button>
        </div>) }
    </>;
};

export default TrainingData;
