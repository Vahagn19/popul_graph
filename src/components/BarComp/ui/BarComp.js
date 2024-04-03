import { Chart as ChartJS } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
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
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

function BarComp() {
const options = {}

return (
<div><Line data={test} options={options}/></div>
  ) 
}

export default BarComp;
