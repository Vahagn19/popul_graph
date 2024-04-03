import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./graph.module.css";
import { Chart } from "chart.js";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function Graph() {
  const [array, setArray] = useState(null);
  const apiUrl =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setArray(result.array);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  const test = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Example Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div>
      {/* <Bar data={test} /> */}
    </div>
  );
}

export default Graph;
