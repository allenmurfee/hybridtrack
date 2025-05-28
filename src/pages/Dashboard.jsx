import React, { useState, useEffect } from "react";

const dummyEmployees = [
  { id: 1, name: "Alice Johnson", wfhDays: ["Mon", "Wed", "Fri"] },
  { id: 2, name: "Bob Smith", wfhDays: ["Tue", "Thu"] },
];

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);

  // For now, load dummy data
  useEffect(() => {
    setEmployees(dummyEmployees);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full md:w-2/3 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-semibold mb-4 text-center">Employee Hybrid Schedule</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">WFH Days</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(({ id, name, wfhDays }) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {wfhDays.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
