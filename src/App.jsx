import StatCard from './components/StatCard'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-12">
        Sanotech Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="کاربران فعال" value="1,234" color="border-blue-600" />
        <StatCard title="سفارشات امروز" value="89" color="border-green-600" />
        <StatCard title="درآمد ماه" value="۱۲۳ میلیون" color="border-purple-600" />
        <StatCard title="تیکت‌های باز" value="12" color="border-red-600" />
      </div>
    </div>
  )
}

export default App
