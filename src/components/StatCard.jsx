function StatCard({ title, value, color }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center border-t-8 ${color}`}>
      <h2 className="text-xl font-bold text-gray-600">{title}</h2>
      <p className="text-5xl font-bold text-indigo-600 mt-4">{value}</p>
    </div>

  )
}

export default StatCard
