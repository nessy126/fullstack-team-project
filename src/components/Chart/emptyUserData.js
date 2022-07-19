const emptyStartUserData = {
  labels: [0, 1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: "Plan to pages read",
      data: [0, 20, 40, 60, 80, 100, 120, 140],
      backgroundColor: ["#091E3F"],
      borderColor: "091E3F",
      borderWidth: 2,
    },
    {
      label: "Pages read",
      data: [75, 25, 15, 40, 125, 87, 70, 120],
      backgroundColor: ["#FF6B08"],
      borderColor: "#FF6B08",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

export default emptyStartUserData;
