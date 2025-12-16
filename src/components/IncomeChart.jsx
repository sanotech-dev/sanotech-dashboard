import { Bar } from 'react-chartjs-2' ;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js' ;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function IncomeChart() {
  const data = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'درآمد (میلیون تومان)',
        data: [65, 78, 92, 81, 110, 135],
        backgroundColor: 'rgba(79, 70, 229, 0.6)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugin: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'درآمد ماهانه Sanotech',
        fontSize: 20,
      },
    },
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <Bar data={data} options={options} />
    </div>
  );
}

export default IncomeChart;
