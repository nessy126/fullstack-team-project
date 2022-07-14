import PlaningTabl from '../PlainingTabl/PlainingTabl';
import Select from './../Select/Select';
import { useState } from 'react';
import s from './TrainingData.module.scss';

const books=[{
  id: 1,
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1978,
  status: "goingToRead", 
  pagesTotal: 100,
  pagesFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
  feedBack: {
      rating: 0,
      comment: ""
  },
  statistics: [{
      id_stat: 123,
      date: "11.09.2009",
      pagesFinished: 0,
  }],
  owner: {},
  },
  {
      id: 2,
      title: "Преступление и наказание, dsfkjhdfkjhdfg, sdfkjhadfkjhbdgfhkjgdf, sdfg, sdfgadfg",
      author: "Фёдор Достоевский",
      year: 1978,
      status: "finished",
      pagesTotal: 100,
      pagesFinished: 100, //сумма прочитанных стр из статистики, но не более pages;
      feedBack: {
          rating: 2,
          comment: "sfghdfgh"
      },
      statistics: [{
          id_stat: 123,
          date: "11.09.2009",
          pagesFinished: 100,
      }],
      owner: {},
      },
      {
          id: 3,
          title: "Маленький принц",
          author: "Антуан де Сент-Экзюпери",
          year: 1928,
          status: "goingToRead", 
          pagesTotal: 80,
          pagesFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
          feedBack: {
              rating: 0,
              comment: ""
          },
          statistics: [{
              id_stat: 123,
              date: "11.09.2009",
              pagesFinished: 0,
          }],
          owner: {},
          },
          {
              id: 4,
              title: "Двенадцать стульев",
              author: "Евгений Петров", 
              year: 1928,
              status: "goingToRead", 
              pagesTotal: 80,
              pagesFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
              feedBack: {
                  rating: 0,
                  comment: ""
              },
              statistics: [{
                  id_stat: 123,
                  date: "11.09.2009",
                  pagesFinished: 0,
              }],
              owner: {},
              },
              {
                  id: 5,
                  title: "Исчезнувшая",
                  author: "Гиллиан Флинн", 
                  year: 1978,
                  status: "goingToRead", 
                  pagesTotal: 90,
                  pagesFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
                  feedBack: {
                      rating: 0,
                      comment: ""
                  },
                  statistics: [{
                      id_stat: 123,
                      date: "11.09.2009",
                      pagesFinished: 0,
                  }],
                  owner: {},
                  },
                  {
                      id: 6,
                      title: "Милые кости",
                      author: "ГЭлис Сиболд", 
                      year: 2008,
                      status: "goingToRead", 
                      pagesTotal: 190,
                      pagesFinished: 0, //сумма прочитанных стр из статистики, но не более pages;
                      feedBack: {
                          rating: 0,
                          comment: ""
                      },
                      statistics: [{
                          id_stat: 123,
                          date: "11.09.2009",
                          pagesFinished: 0,
                      }],
                      owner: {},
                      }]
// const books1=[]


const TrainingData = () => {
    const[selected, setSelected]=useState('');
    let listBooks=[];
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
        <Select books={books} selected={selected} setSelected={setSelected}/>
        <button type='button' onClick={handleSelect} className={s.select__button}>Add</button>
    </div> 
    <PlaningTabl listBooks={listBooks} handleDelBook={handleDelBook}/>
    <div className={s.button__wrapper}>
        <button type='button' onClick={()=>{console.log("Start training")}} className={s.start__button}>Start training</button>
    </div>
    
    </>;
};

export default TrainingData;
