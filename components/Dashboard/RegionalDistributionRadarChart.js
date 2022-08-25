import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RegionalDistributionRadarChart = ({ regionalDistribution }) => {
  const data = {
    labels: ["West", "Midwest", "Northeast", "South", "Pacific"],
    datasets: [
      {
        label: "Number of Users",
        data: [
          regionalDistribution?.west,
          regionalDistribution?.midwest,
          regionalDistribution?.northeast,
          regionalDistribution?.south,
          regionalDistribution?.pacific,
        ],
        backgroundColor: "rgba(127, 0, 255, 0.5)",
        borderColor: "rgba(127, 0, 255, 1)",
        borderWidth: 2,
        font: {
          size: 30,
        },
      },
    ],
  };

  return (
    <div className={"py-10 md:py-0"}>
      <h1 className={"text-center text-xl font-semibold text-gray-900 md:py-2"}>
        Regional Demographics
      </h1>
      <Radar data={data} />
    </div>
  );
};
export default RegionalDistributionRadarChart;
