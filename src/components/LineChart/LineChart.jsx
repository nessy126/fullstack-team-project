import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import PropTypes from "prop-types";

import { setOptions, COLORS } from "../../assets/helpers/chart";

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
  }, [daysForTraining, pagesReadInTraining, planToRead]);

  return <Line options={setOptions(amountOfPagesPlan)} data={userReadData} />;
}

LineChart.propTypes = {
  chartData: PropTypes.shape({
    daysForTraining: PropTypes.arrayOf(PropTypes.number),
    planToRead: PropTypes.arrayOf(PropTypes.number),
    pagesReadInTraining: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
    ]),
    amountOfPagesPlan: PropTypes.number,
  }),
};

export default LineChart;
