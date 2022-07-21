import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { useSelector } from "react-redux";
import { getStatusIsTraining } from "redux/auth/authSelectors";
import initialData from "./trainingData";

import s from "./Chart.module.scss";

const COLORS = {
  PLAN: "#091E3F",
  READ: "#FF6B08",
  GRID: "#B1B5C2",
};

const Chart = (props) => {
  const { userData } = props;
  const isTraining = useSelector(getStatusIsTraining);
  // Проверка данных которые приходят от родительского компонента
  const trainingData =
    userData === undefined
      ? initialData
      : userData.booksList.length === 0
      ? initialData
      : userData;

  //Перевод даты в день(формат числа: 23, 13, 1 и т.п.)
  const daysCountFunc = (start, end) => {
    return Math.round((end - start) / (1000 * 3600 * 24));
  };

  const amountOfDays = daysCountFunc(
    trainingData.startTraining,
    trainingData.endTraining
  );

  const amountOfPagesPlan =
    trainingData.booksList.length === 0
      ? 0
      : Math.round(
          trainingData.booksList.reduce(
            (sum, { pageTotal }) => sum + pageTotal,
            0
          ) / trainingData.amountOfDays
        );

  // Подсчет дней тренировки для корресктной работы графика

  const countDaysForTraining = () => {
    const daysToRead = [];
    let i = 0;
    do {
      daysToRead.push(i);
      i++;
    } while (i <= amountOfDays);
    return daysToRead;
  };
  const daysForTraining = countDaysForTraining();

  // Запланировано к прочтению
  const makePlanToRead = () => {
    let pagesSumToRead = 0;
    return daysForTraining.map((day, index) => {
      if (!isTraining) {
        const amountOfPages = trainingData.booksList.reduce(
          (sum, { pageTotal }) => sum + pageTotal,
          0
        );
        if (index === 0) {
          return pagesSumToRead;
        }
        const pagesPerDay = Math.round(
          amountOfPages / trainingData.amountOfDays
        );
        return (pagesSumToRead += pagesPerDay);
      }
      return (pagesSumToRead += trainingData.pagesPerDay);
    });
  };
  const planToRead = makePlanToRead();

  // Фактически прочитано
  const makePagesReadArr = () => {
    let pagesReadTotal = 0;
    return daysForTraining.map((date) => {
      const isDateIn = trainingData.statistics.filter((el) => {
        const isDayIn = daysCountFunc(trainingData.startTraining, el.date);
        return isDayIn === date;
      });
      if (isDateIn.length === 1) {
        return (pagesReadTotal += isDateIn[0].pagesRead);
      }
      if (isDateIn.length > 1) {
        return isDateIn.reduce((sum, { pagesRead }) => (sum += pagesRead), 0);
      }
      return pagesReadTotal;
    });
  };
  const pagesReadInTraining = isTraining ? makePagesReadArr() : 0;
  // Инициализация данных для графика
  const [userReadData, setUserReadData] = useState({
    labels: daysForTraining,
    datasets: [
      {
        label: "Plan to pages read",
        data: planToRead,
        backgroundColor: [COLORS.PLAN],
        borderColor: COLORS.PLAN,
        borderWidth: 2,
      },
      {
        label: "Pages read",
        data: pagesReadInTraining,
        backgroundColor: [COLORS.READ],
        borderColor: COLORS.READ,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  // Динамическое отображение графика на странице планирования тренировки
  useEffect(() => {
    setUserReadData({
      labels: daysForTraining,
      datasets: [
        {
          label: "Plan to pages read",
          data: planToRead,
          backgroundColor: [COLORS.PLAN],
          borderColor: COLORS.PLAN,
          borderWidth: 2,
        },
        {
          label: "Pages read",
          data: pagesReadInTraining,
          backgroundColor: [COLORS.READ],
          borderColor: COLORS.READ,
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    });
    // Зависимость установлена таким образом, что данные меняються только в том случае, если приходит новый массив с данными от родительского компонента
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: true,
          maxTicksLimit: 0,
          beginAtZero: true,
        },
      },
      x: {
        grid: {
          drawBorder: true,
          color: COLORS.GRID,
        },
        ticks: {
          beginAtZero: true,
          display: true,
          maxTicksLimit: 6,
        },
        title: {
          display: true,
          text: "Days",
          align: "end",
          font: {
            family: "Montserrat",
            size: 12,
            lineHeight: 1.25,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 5,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <>
      <div className={s.chartWrapper}>
        <p className={s.chartText}>
          pages/ days
          <span className={s.chartText__Span}>
            {!isTraining ? amountOfPagesPlan : trainingData.pagesPerDay}
          </span>
        </p>
        <div className={s.chart}>
          <LineChart chartOptions={options} chartData={userReadData} />
        </div>
      </div>
    </>
  );
};

export default Chart;
