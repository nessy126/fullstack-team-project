import { useState } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

import LineChart from "./LineChart";

import s from "./Chart.module.scss";

const Chart = (props) => {
  const trdta = {
    booksId: [
      "62d06588582a767000c16312",
      "62d097ee1f1da9c76c34fa45",
      "62d0982a1f1da9c76c34fa48",
    ],
    booksList: [
      {
        feedback: { rating: 0, comment: "" },
        _id: "62d06588582a767000c16312",
        title: "1984",
        author: "George Orwell",
        year: 1949,
        status: "inReading",
        pageTotal: 328,
        pageFinished: 0,
        owner: "62cf0bfc68b78831d2c0fa9e",
        createdAt: "2022-07-14T18:50:48.607Z",
        updatedAt: "2022-07-15T07:56:56.550Z",
      },
      {
        feedback: { rating: 0, comment: "" },
        _id: "62d097ee1f1da9c76c34fa45",
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        status: "inReading",
        pageTotal: 311,
        pageFinished: 0,
        owner: "62cf0bfc68b78831d2c0fa9e",
        createdAt: "2022-07-14T22:25:50.567Z",
        updatedAt: "2022-07-15T07:56:56.550Z",
      },
      {
        feedback: { rating: 0, comment: "" },
        _id: "62d0982a1f1da9c76c34fa48",
        title: "All Quiet on the Western Front",
        author: "Erich Maria Remarque",
        year: 1929,
        status: "inReading",
        pageTotal: 200,
        pageFinished: 0,
        owner: "62cf0bfc68b78831d2c0fa9e",
        createdAt: "2022-07-14T22:26:50.413Z",
        updatedAt: "2022-07-15T07:56:56.550Z",
      },
    ],
    amountOfBooks: 3,
    booksLeft: 2,
    startTraining: 1657837901881,
    endTraining: 1667837901881,
    amountOfPages: 839,
    pagesPerDay: 7,
    statistics: [
      { date: 1658523600000, pagesRead: 10 },
      { date: 1658523600000, pagesRead: 10 },
      { date: 1659128400000, pagesRead: 34 },
      { date: 1659992400000, pagesRead: 56 },
      { date: 1661202000000, pagesRead: 45 },
      { date: 1662757200000, pagesRead: 23 },
      { date: 1663189200000, pagesRead: 34 },
      { date: 1663780400000, pagesRead: 149 },
      { date: 1663880400000, pagesRead: 23 },
      { date: 1666213200000, pagesRead: 23 },
      { date: 1667599200000, pagesRead: 10 },
    ],
  };

  //Перевод даты в день(формат числа: 23, 13, 1 и т.п.)
  const daysCountFunc = (start, end) => {
    return Math.round((end - start) / (1000 * 3600 * 24));
  };
  const amountOfDays = daysCountFunc(trdta.startTraining, trdta.endTraining);
  //

  const pagesReadBeforeStart = trdta.booksList.reduce(
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
      return (pagesSumToRead += trdta.pagesPerDay);
    });
  };
  const planToRead = makePlanToRead();

  // Фактически прочитано

  const makePagesReadArr = () => {
    let pagesReadTotal = 0;
    return daysForTraining.map((date) => {
      const isDateIn = trdta.statistics.filter((el) => {
        const isDayIn = daysCountFunc(trdta.startTraining, el.date);
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

  makePagesReadArr();
  const pagesReadInTraining = makePagesReadArr();
  console.log(pagesReadInTraining);

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
        tension: 0.6,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 900,
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
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
    },
  };

  return (
    <>
      <div className={s.chartWrapper}>
        <p className={s.chartText}>
          pages/ days
          <span className={s.chartText__Span}>{trdta.pagesPerDay}</span>
        </p>
        <div className={s.chart}>
          <LineChart chartOptions={options} chartData={userReadData} />
        </div>
      </div>
    </>
  );
};

export default Chart;
