import { useState } from "react";
import LineChart from "./LineChart";

import emptyStartUserData from "./emptyUserData";
import trainingData from "./trainingData";

import s from "./Chart.module.scss";

const Chart = (props) => {
  const { trainingStatus } = props;

  //Перевод даты в день(формат числа: 23, 13, 1 и т.п.)
  const daysCountFunc = (start, end) => {
    return Math.round((end - start) / (1000 * 3600 * 24));
  };
  const amountOfDays = daysCountFunc(
    trainingData.startTraining,
    trainingData.endTraining
  );
  const pagesReadBeforeStart = trainingData.booksList.reduce(
    (sum, { pageFinished }) => sum + pageFinished,
    0
  );
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
      if (index === 0 && pagesReadBeforeStart === 0) {
        return pagesSumToRead;
      }
      if (index === 0 && pagesReadBeforeStart !== 0) {
        return (pagesSumToRead += pagesReadBeforeStart);
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
  const pagesReadInTraining = makePagesReadArr();

  const [userReadData, setUserReadData] = useState({
    labels: daysForTraining,
    datasets: [
      {
        label: "Plan to pages read",
        data: planToRead,
        backgroundColor: ["#091E3F"],
        borderColor: "091E3F",
        borderWidth: 2,
      },
      {
        label: "Pages read",
        data: pagesReadInTraining,
        backgroundColor: ["#FF6B08"],
        borderColor: "#FF6B08",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false,
          maxTicksLimit: 0,
          beginAtZero: true,
        },
      },
      x: {
        grid: {
          drawBorder: true,
          color: "#B1B5C2",
        },
        ticks: {
          beginAtZero: true,
          display: false,
          maxTicksLimit: 6,
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
            {!trainingStatus ? 0 : trainingData.pagesPerDay}
          </span>
        </p>
        <div className={s.chart}>
          <LineChart
            chartOptions={options}
            chartData={!trainingStatus ? emptyStartUserData : userReadData}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
