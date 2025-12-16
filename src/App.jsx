import StatCard from './components/StatCard';

import ActivityTable from './components/ActivityTable';

import IncomeChart from './components/IncomeChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Sanotech Admin Dashboard
      </h1>

      <div className="text-center mb-8">
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          تغییر به حالت {document.documentElement.classList.contains('dark') ? 'روشن' : 'تاریک'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="کاربران فعال" value="1,234" color="border-blue-600" />
        <StatCard title="سفارشات امروز" value="89" color="border-green-600" />
        <StatCard title="درآمد ماه" value="۱۲۳ میلیون" color="border-purple-600" />
        <StatCard title="تیکت‌های باز" value="12" color="border-red-600" />
      </div>
      <ActivityTable />
      <IncomeChart />
    </div>
  );
}

export default App;
