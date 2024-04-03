import { Chart as ChartJS } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line,Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)


const test = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Example Dataset",
        data: [650, 59, 800, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
      },
    ],
  };

function BarComp() {
const options = {}

return (
<div style={{width:"900px",height:"700px"}}><Bar data={test} options={options}/></div>
  ) 
}

export default BarComp;
