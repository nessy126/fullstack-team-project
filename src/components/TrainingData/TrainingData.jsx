import PlaningTabl from "../PlainingTabl";
import Select from "../Select";
import { useState } from "react";
import s from "./TrainingData.module.scss";
import { useSelector, useDispatch } from "react-redux";
import bookSelectors from "../../redux/book/bookSelectors";
import trainingSelectors from "../../redux/training/trainingSelectors";


const books=[{
    _id: "62d06588582a767000c16319",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1978,
    status: "goingToRead", 
    pageTotal: 100,
    pageFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
    feedback: {
        rating: 0,
        comment: ""
    },
    owner: {            
        _id: "62cf0bfc68b78831d2c0fa9e",
        name: "John Doe",
        email: "some.mail@mail.com"
        },
    },
    {
        _id: "62d06588582a767000c16313",
        title: "Преступление и наказание, dsfkjhdfkjhdfg, sdfkjhadfkjhbdgfhkjgdf, sdfg, sdfgadfg",
        author: "Фёдор Достоевский",
        year: 1978,
        status: "finished",
        pageTotal: 100,
        pageFinished: 100, //сумма прочитанных стр из статистики, но не более pages;
        feedback: {
            rating: 2,
            comment: "sfghdfgh"
        },
        owner: {            
            _id: "62cf0bfc68b78831d2c0fa9e",
            name: "John Doe",
            email: "some.mail@mail.com"
            },
    },
    {
    _id: "62d06588582a767000c16314",
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        year: 1928,
        status: "goingToRead", 
        pageTotal: 80,
        pageFinished: 0,
        feedback: {
            rating: 0,
            comment: ""
        },
        owner: {            
        _id: "62cf0bfc68b78831d2c0fa9e",
        name: "John Doe",
        email: "some.mail@mail.com"
        },
        },
        {
        _id: "62d06588582a767000c16315",
            title: "Двенадцать стульев",
            author: "Евгений Петров", 
            year: 1928,
            status: "goingToRead", 
            pageTotal: 80,
            pageFinished: 0,
            feedback: {
                rating: 0,
                comment: ""
            },
            owner: {            
            _id: "62cf0bfc68b78831d2c0fa9e",
            name: "John Doe",
            email: "some.mail@mail.com"
            },
        },
        {
        _id: "62d06588582a767000c16316",
            title: "Исчезнувшая",
            author: "Гиллиан Флинн", 
            year: 1978,
            status: "goingToRead", 
            pageTotal: 90,
            pageFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
            feedback: {
                rating: 0,
                comment: ""
            },
            owner: {            
            _id: "62cf0bfc68b78831d2c0fa9e",
            name: "John Doe",
            email: "some.mail@mail.com"
            },
        },
    {
    _id: "62d06588582a767000c16317",
        title: "Милые кости",
        author: "ГЭлис Сиболд", 
        year: 2008,
        status: "goingToRead", 
        pageTotal: 190,
        pageFinished: 0,
        feedback: {
            rating: 0,
            comment: ""
        },
        owner: {            
            _id: "62cf0bfc68b78831d2c0fa9e",
            name: "John Doe",
            email: "some.mail@mail.com"
        },
    }]
// const books1=[]

const TrainingData = () => {
const isLoading =useSelector(trainingSelectors.getIsLoading);
const listGoingToRead= useSelector(bookSelectors.getListGoingToRead);
const error = useSelector(trainingSelectors.getError);



    const[selected, setSelected]=useState('');
    let listBooks=[...books];
    const handleDelBook =(id)=>{
        const newListBooks=listBooks.filter(book=>book.id!==id);
        return newListBooks;
    }
    const resetState=()=>{
        setSelected('Choose books from the library')
    }
    const handleSelect=(e)=>{
        console.log(e.target)
        listBooks.push(selected);
        resetState()
        console.log(listBooks);
    }

    return <>
        <div className={s.select__wrapper}>
            <Select 
                books={books} 
                selected={selected} 
                setSelected={setSelected}/>
            <button 
                type='button' 
                onClick={handleSelect} 
                className={s.select__button}>Add
            </button>
        </div> 
        <PlaningTabl 
            listBooks={listBooks} 
            handleDelBook={handleDelBook}/>
        <div className={s.button__wrapper}>
            <button 
                type='button' 
                onClick={()=>{console.log("Start training")}} className={s.start__button}>Start training
            </button>
        </div>
    </>;
};

export default TrainingData;
