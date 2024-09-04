const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: "easeOutBounce",
  },
  plugins: {
    title: {
      display: true,
      text: "Despeses - Última setmana",
      font: {
        family: "Monaco",
        size: 18,
      },
      padding: {
        top: 10,
        bottom: 30,
      },
      color: "#000",
    },
    tooltip: {
      callbacks: {
        title: (tooltipItems) => tooltipItems[0].label,
        label: (tooltipItem) =>
          `${tooltipItem.dataset.label}: ${tooltipItem.raw} €`,
      },
      titleFont: {
        family: "Monaco",
      },
      bodyFont: {
        family: "Monaco",
      },
      backgroundColor: "#efefef",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#efefef",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: "Monaco",
          size: 12,
        },
        color: "#babab8",
      },
      grid: {
        color: "",
      },
    },
    y: {
      ticks: {
        font: {
          family: "Monaco",
          size: 12,
        },
        color: "#babab8",
        stepSize: 20,
      },
      grid: {
        color: "#babab8",
      },
    },
  },
};

export default chartOptions;
