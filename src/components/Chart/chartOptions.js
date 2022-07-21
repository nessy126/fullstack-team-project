import { externalTooltipHandler } from "./externalTooltipHandler";

const COLORS = {
  GRID: "#B1B5C2",
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
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: externalTooltipHandler,
    },
  },
};
