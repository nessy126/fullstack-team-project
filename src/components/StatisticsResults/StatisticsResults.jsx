import { useDispatch, useSelector } from "react-redux";
import { finishTraiining, getProgressTraining } from "redux/training/trainingOperations";
import {getbooksList, getTrainingID} from '../../redux/training/trainingSelectors';
const StatisticsResults = () => {
  const dispatch = useDispatch()
  const trainingID = useSelector(getTrainingID)
  const booksList = useSelector(getbooksList)
  
  const data = {
    factEndTraining: "2222222222",
    trainingID,
    booksList: [
      {
          "feedback": {
              "rating": null,
              "comment": ""
          },
          "_id": "62d85c37237735ce5d7fd5a0",
          "title": "Восемь маков",
          "author": "Одуванчиков",
          "year": 1655,
          "status": "inReading",
          "pageTotal": 235,
          "pageFinished": 0,
          "owner": "62d472ece74afa75f3ca8870"
      },
      {
          "feedback": {
              "rating": null,
              "comment": ""
          },
          "_id": "62d85c1f237735ce5d7fd59d",
          "title": "Книга Семь чудес",
          "author": "Тот же",
          "year": 1986,
          "status": "inReading",
          "pageTotal": 765,
          "pageFinished": 0,
          "owner": "62d472ece74afa75f3ca8870"
      }
  ]
  }
   
    return (
        <>
            <div>StatisticsRes</div>
            <button 
            type="button"
            onClick={() => {
              console.log(data);
              dispatch(finishTraiining(data))
            }}
            >Training will be finished</button>

            <button 
            type="button"
            onClick={() => {
              dispatch(getProgressTraining())
            }}
            >Get Progress</button>
        </>
    );
}

export default StatisticsResults;