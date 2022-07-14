import PlaningTabl from '../PlainingTabl/PlainingTabl';
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
const listBooks=[...books]

const TrainingData = () => {
  const handleDelBook =(id)=>{
    console.log(id)
      }
  return <>
  <PlaningTabl listBooks={listBooks} handleDelBook={handleDelBook}/>
  </>;
};

export default TrainingData;
