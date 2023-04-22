import { useEffect } from "react";
import { Chart } from "chart.js";
function PieChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    if (typeof window.myChart === "object" && window.myChart instanceof Chart) {
      window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            data: [70, 10, 6],
            borderColor: [
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 132)",
            ],
            backgroundColor: [
              "rgb(75, 192, 192 )",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 132)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className="">
      {/* Doughnut chart */}
      <h1 className="w-[150px] bg-black mx-auto mt-10 text-xl font-semibold capitalize ">
        Doughnut Chart
      </h1>
      <div className="w-[45vw] flex mx-auto m-auto bg-white rounded-2xl p-4">
        <div className="borde  border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
