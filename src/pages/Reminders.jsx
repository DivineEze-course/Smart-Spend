export default function ReminderModal({ onClose }) {

  const goals =
    JSON.parse(localStorage.getItem("userGoals")) || [];

  const today = new Date();

  const reminders = goals.map((goal) => {

    let dueDate = new Date(goal.startDate);

    while (dueDate < today) {
      dueDate.setMonth(
        dueDate.getMonth() + 1
      );
    }

    const daysLeft = Math.ceil(
      (dueDate - today) /
      (1000 * 60 * 60 * 24)
    );

    return {
      ...goal,
      dueDate,
      daysLeft
    };
  });

  reminders.sort(
    (a, b) => a.dueDate - b.dueDate
  );

  return (

    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >

  
      <div
        className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-red-800"
        >
          <i className="bi bi-x text-3xl"></i>
        </button>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-red-100 flex justify-center items-center">

            <i className="bi bi-bell text-2xl text-red-800"></i>

          </div>

          <div>

            <h1 className="text-3xl font-bold text-red-900">
              Payment Reminders
            </h1>

            <p className="text-gray-500">
              Upcoming savings payments
            </p>

          </div>

        </div>

        <div className="mt-8 flex flex-col gap-4">

          {reminders.length > 0 ? (

            reminders.map((goal) => (

              <div
                key={goal.id}
                className="border border-red-100 rounded-2xl p-5 hover:bg-red-50 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-red-900">
                      {goal.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Due in {goal.daysLeft} days
                    </p>

                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Due Date
                    </p>
                    <p className="font-semibold text-red-800">
                      {goal.dueDate.toDateString()}
                    </p>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="text-center py-10">

              <i className="bi bi-bell-slash text-5xl text-gray-300"></i>

              <p className="text-gray-500 mt-4">
                No reminders available
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}