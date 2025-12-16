const activities = [
  {
    user: 'علی احمدی',
    action: 'سفارش جدید #1234',
    time: '۵ دقیقه پیش',
    status: 'تکمیل شده',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    user: 'زهرا رضایی',
    action: 'تیکت پشتیبانی',
    time: '۲۰ دقیقه پیش',
    status: 'در حال بررسی',
    statusColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    user: 'محمد کریمی',
    action: 'پرداخت فاکتور',
    time: '۱ ساعت پیش',
    status: 'تکمیل شده',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    user: 'سارا محمدی',
    action: 'ثبت‌نام کاربر جدید',
    time: '۲ ساعت پیش',
    status: 'تکمیل شده',
    statusColor: 'bg-green-100 text-green-800',
  },
  { user: "سجاد نوروزی",
    action: "یادگیری React",
    time: "همین الان",
    status: "در حال پیشرفت",
    statusColor: "bg-blue-100 text-blue-800"
  },
];

function ActivityTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">آخرین فعالیت‌ها</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-4 px-6">کاربر</th>
              <th className="py-4 px-6">فعالیت</th>
              <th className="py-4 px-6">زمان</th>
              <th className="py-4 px-6">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6">{activity.user}</td>
                <td className="py-4 px-6">{activity.action}</td>
                <td className="py-4 px-6">{activity.time}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${activity.statusColor}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
