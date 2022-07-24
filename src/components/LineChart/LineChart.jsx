import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import { setOptions } from "../../assets/helpers/chart";

const COLORS = {
  PLAN: "#091E3F",
  READ: "#FF6B08",
};

function LineChart({ chartData }) {
  const {
    daysForTraining,
    planToRead,
    pagesReadInTraining,
    amountOfPagesPlan,
  } = chartData;
  const [userReadData, setUserReadData] = useState({
    labels: [],
    datasets: [
      {
        label: "Plan to pages read",
        data: [],
        backgroundColor: [COLORS.PLAN],
        borderColor: COLORS.PLAN,
        borderWidth: 2,
        tension: 0.5,
      },
      {
        label: "Pages read",
        data: [],
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
          tension: 0.4,
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
    // Коментарий ниже(строка 66) оставлен специально eslint-ером. Не удалять!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartData]);

  return <Line options={setOptions(amountOfPagesPlan)} data={userReadData} />;
}

export default LineChart;
