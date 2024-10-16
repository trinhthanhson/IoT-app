import React, { useState } from 'react';

const Config = () => {
  // State to hold table data
  const [tableData, setTableData] = useState([
    { name: 'Example 1', time: '12:00 PM' },
    { name: 'Example 2', time: '1:00 PM' },
  ]);

  // State for new entry
  const [newEntry, setNewEntry] = useState({ name: '', time: '' });
  
  // State to control visibility of the input box
  const [showInput, setShowInput] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  // Function to add a new entry
  const addEntry = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (newEntry.name && newEntry.time) {
      setTableData([...tableData, newEntry]);
      setNewEntry({ name: '', time: '' }); // Clear the input fields
      setShowInput(false); // Hide the input box after adding
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Phần bên trái: Thanh menu */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Smart city</h2>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/traffic-lane-section" className="block p-2 rounded hover:bg-gray-700">
              Traffic lane section
            </a>
          </li>
          <li>
            <a href="/config" className="block p-2 rounded hover:bg-gray-700">
              Config
            </a>
          </li>
          <li>
            <a href="/login" className="block p-2 rounded hover:bg-gray-700">
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Phần bên phải: Nội dung */}
      <div className="w-5/6 bg-gray-100 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Configuration Settings</h2>

        {/* Button to show input box */}
        <button
          onClick={() => setShowInput(!showInput)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showInput ? 'Cancel' : 'Add New Entry'}
        </button>

        {/* Box to add new entry */}
        {showInput && (
          <form onSubmit={addEntry} className="mb-4 p-4 bg-white border border-gray-300 rounded">
            <h3 className="text-xl mb-2">Add New Entry</h3>
            <div className="mb-2">
              <label className="block mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newEntry.name}
                onChange={handleChange}
                className="border border-gray-400 p-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1" htmlFor="time">Time</label>
              <input
                type="text"
                id="time"
                name="time"
                value={newEntry.time}
                onChange={handleChange}
                className="border border-gray-400 p-2 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Entry
            </button>
          </form>
        )}

        {/* Table */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-semibold">Name</th>
              <th className="py-2 px-4 border-b font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{entry.name}</td>
                <td className="py-2 px-4 border-b">{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Config;
