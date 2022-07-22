const COLORS = {
  GRID: "#b1b5c2e5",
  TEXT: "#000000",
};

const setTitle = (tooltipItems) => {
  const title = tooltipItems.find((el) => {
    return typeof el.label === "string";
  });
  return `Day ${title.label}`;
};

export const options = {
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
        color: COLORS.TEXT,
        font: {
          family: "Montserrat",
          size: 12,
          lineHeight: 3.17,
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
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      position: "nearest",
      titleAlign: "center",
      backgroundColor: COLORS.GRID,
      callbacks: {
        title: setTitle,
      },
    },
  },
};
