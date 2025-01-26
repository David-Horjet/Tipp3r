import type React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface DonationChartProps {
  selectedChart: "weekly" | "monthly"
  setSelectedChart: (chart: "weekly" | "monthly") => void
}

const DonationChart: React.FC<DonationChartProps> = ({ selectedChart, setSelectedChart }) => {
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Donations",
        data: [12, 19, 3, 5, 2, 3, 15],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const monthlyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Donations",
        data: [65, 59, 80, 81],
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Donation Trend",
      },
    },
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Donation Trend</h2>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded ${selectedChart === "weekly" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedChart("weekly")}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedChart === "monthly" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedChart("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
      <Line options={options} data={selectedChart === "weekly" ? weeklyData : monthlyData} />
    </div>
  )
}

export default DonationChart

