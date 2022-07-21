import { useDispatch, useSelector } from "react-redux";
import { finishTraiining, getProgressTraining } from "redux/training/trainingOperations";
import { getbooksList, getTrainingID } from '../../redux/training/trainingSelectors';
const StatisticsResults = () => {
  const dispatch = useDispatch()
  const trainingID = useSelector(getTrainingID)
  const booksId = useSelector(getbooksList)

  const data = {
    factEndTraining: 882222222222,
    trainingID: "62d982fdd797fab190f1109d",
    booksId: []
  }

  return (
    <>
      <div>StatisticsRes</div>
      <button
        type="button"
        onClick={() => {
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