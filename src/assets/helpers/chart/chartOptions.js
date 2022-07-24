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

export const setOptions = (pagesToCheck) => {
  const setTrueOrFalse = pagesToCheck > 0 ? true : false;
  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        ticks: {
          display: setTrueOrFalse,
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
      title: {
        display: true,
        position: "top",
        align: "start",
        text: `PAGES/DAY   ${pagesToCheck}`,
        color: COLORS.TEXT,
        padding: 12,
        fullSize: false,
        font: {
          family: "'Montserrat', sans-serif",
          weight: 500,
          size: 12,
          lineHeight: 3.17,
        },
      },
      legend: { display: false },
      tooltip: {
        enabled: setTrueOrFalse,
        position: "nearest",
        titleAlign: "center",
        backgroundColor: COLORS.GRID,
        callbacks: {
          title: setTitle,
        },
      },
    },
  };
};
