const getError = ({training}) => training.error;
const getIsLoggedIn=({training})=> training.isLoggedIn;
const getIsLoading=({training})=> training.isLoading;
const getFinishedTrainings=({training})=> training.finishedTrainings;
const getTrainingInfo=({training})=> training.training;
const getStartTraining=({training})=> training.training.startTraining;
const getEndTraining=({training})=> training.training.endTraining;
const getListIdBooksTraining=({training})=> training.training.booksId;


const trainingSelectors={
    getError,
    getIsLoggedIn,
    getIsLoading,
    getFinishedTrainings,
    getTrainingInfo,
    getStartTraining,
    getEndTraining,
    getListIdBooksTraining
};


export default trainingSelectors;
