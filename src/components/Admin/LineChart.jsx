import { Chart} from 'chart.js/auto';

import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

import { Line } from "react-chartjs-2";

const LineChart = ({ data, optimum }) => {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        label: "Value",
        data: data,
        fill: false,
        borderColor: "#3182CE",
        tension: 0.1,
      },
      {
        label: "Optimum",
        data: Array(data.length).fill(optimum),
        fill: false,
        borderColor: "#9B2C2C",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default LineChart;
