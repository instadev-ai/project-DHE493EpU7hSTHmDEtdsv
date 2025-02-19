import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

interface ChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
      tension?: number;
    }>;
  };
}

export function BarChart({ data }: ChartProps) {
  return (
    <div className="w-full h-[300px]">
      <Bar options={options} data={data} />
    </div>
  );
}

export function LineChart({ data }: ChartProps) {
  return (
    <div className="w-full h-[300px]">
      <Line options={options} data={data} />
    </div>
  );
}