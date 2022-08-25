import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DemographicsPieChart = ({ ageDemographics }) => {
  const data = {
    labels: ["18 - 24", "25 - 34", "35 - 44", "45 - 54", "55 - 64", "65+"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          ageDemographics?.age18to24,
          ageDemographics?.age25to34,
          ageDemographics?.age35to44,
          ageDemographics?.age45to54,
          ageDemographics?.age55to64,
          ageDemographics?.age65plus,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 90, 0, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 90, 0, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className={"py-10 md:py-0"}>
      <h1 className={"text-center text-xl font-semibold text-gray-900 md:py-2"}>
        Age Demographics
      </h1>
      <Pie data={data} />
    </div>
  );
};
export default DemographicsPieChart;
