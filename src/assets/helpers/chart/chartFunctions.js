const setTrainingLocStorData = (
  isTraining,
  localStorData,
  dataFromLocalStor,
  initialData,
  trainingData
) => {
  if (!isTraining && !localStorData) {
    return initialData;
  }
  if (!isTraining && localStorData) {
    return dataFromLocalStor;
  }
  if (isTraining) {
    return trainingData;
  }
};

//Перевод даты в день(формат числа: 23, 13, 1 и т.п.)
const daysCountFunc = (date1, date2) => {
  const start = new Date(date1);
  const end = new Date(date2);
  return Math.ceil((end - start) / (1000 * 3600 * 24));
};

const amountOfPagesPlanCountFunc = (booksArr, days) => {
  if (booksArr?.length === 0) {
    return 0;
  }
  if (days > 0) {
    return Math.floor(
      booksArr?.reduce((sum, { pageTotal }) => sum + pageTotal, 0) / days
    );
  }
  return 0;
};

const amountOfPagesFunc = (arr, status) => {
  if (!status) {
    return arr?.reduce((sum, { pageTotal }) => sum + pageTotal, 0);
  }
};

// Подсчет дней тренировки для корректной работы графика
const countDaysForTraining = (days) => {
  const daysToRead = [];
  let i = 0;
  do {
    daysToRead.push(i);
    i++;
  } while (i <= days);
  return daysToRead;
};

// Запланировано к прочтению
const makePlanToRead = (
  daysArr,
  status,
  booksArr,
  days,
  trainingPages,
  pagesTotal
) => {
  let pagesSumToRead = 0;
  const planToReadArr = daysArr.map((day) => {
    if (!status) {
      const amountOfPages = booksArr.reduce(
        (sum, { pageTotal }) => sum + pageTotal,
        0
      );
      if (day === 0) {
        return pagesSumToRead;
      }
      const pagesPerDay = Math.round(amountOfPages / days);
      return (pagesSumToRead += pagesPerDay);
    }
    if (day === 0) {
      return pagesSumToRead;
    }
    return (pagesSumToRead += trainingPages);
  });
  if (planToReadArr[planToReadArr.length - 1] > pagesTotal) {
    planToReadArr.pop();
    planToReadArr.push(pagesTotal);
  }
  if (planToReadArr[planToReadArr.length - 1] < pagesTotal) {
    planToReadArr.pop();
    planToReadArr.push(pagesTotal);
  }

  return planToReadArr;
};

// Фактически прочитано
const makePagesReadArr = (daysArr, statistics, dateStart) => {
  let pagesReadTotal = 0;
  return daysArr.map((date) => {
    const isDateIn = statistics.filter((el) => {
      const formatDate = new Date(el.dateNow);
      const isDayIn = daysCountFunc(dateStart, formatDate);
      return isDayIn === date;
    });
    return (pagesReadTotal += isDateIn.reduce(
      (sum, { pagesRead }) => (sum += pagesRead),
      0
    ));
  });
};

const pagesReadInTrainingFunc = (status, daysArr, statistics, dateStart) => {
  if (status) {
    return makePagesReadArr(daysArr, statistics, dateStart);
  }
  return 0;
};

export {
  setTrainingLocStorData,
  daysCountFunc,
  amountOfPagesPlanCountFunc,
  countDaysForTraining,
  makePlanToRead,
  pagesReadInTrainingFunc,
  amountOfPagesFunc,
};
