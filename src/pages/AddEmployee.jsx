import React, { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [wfhDays, setWfhDays] = useState([]);

  function toggleDay(day) {
    setWfhDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Add employee: ${name} with WFH days: ${wfhDays.join(", ")}`);
    // TODO: Send this data to your backend API
    setName("");
    setWfhDays([]);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">Employee Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">WFH Days</label>
          <div className="flex space-x-2">
            {daysOfWeek.map((day) => (
              <label
                key={day}
                className="inline-flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={wfhDays.includes(day)}
                  onChange={() => toggleDay(day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}
