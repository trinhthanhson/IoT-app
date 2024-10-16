import React from "react";
import { Line, Bar } from "react-chartjs-2";
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
} from "chart.js";

// Đăng ký các thành phần của Chart.js
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

const Dashboard = () => {
  // Dữ liệu biểu đồ đường
  const lineData = {
    labels: ["01/01", "02/01", "03/01", "04/01", "05/01", "06/01", "07/01"],
    datasets: [
      {
        label: "Số lượng xe",
        data: [50, 100, 75, 120, 90, 130, 110],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Dữ liệu biểu đồ cột
  const barData = {
    labels: ["01/01", "02/01", "03/01", "04/01", "05/01", "06/01", "07/01"],
    datasets: [
      {
        label: "Số lượng xe",
        data: [50, 100, 75, 120, 90, 130, 110],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Tùy chọn cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ số lượng xe theo ngày",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ngày/Tháng/Năm",
        },
      },
      y: {
        title: {
          display: true,
          text: "Số lượng xe",
        },
        beginAtZero: true,
      },
    },
  };

  // Dữ liệu cho bảng vi phạm
  const violationData = [
    { vehicleType: "Car", violation: "Speeding" },
    { vehicleType: "Truck", violation: "Illegal Parking" },
    { vehicleType: "Motorcycle", violation: "Running Red Light" },
    { vehicleType: "Bus", violation: "Overloading" },
  ];

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
      <div className="w-5/6 bg-gray-100 p-6">
        {/* 4 thẻ input hiển thị số liệu */}
        <div className="flex space-x-4 mb-6">
          <label className="w-full p-3 border border-gray-300 rounded-lg">
            <p>Total traffic violations: 500</p>
          </label>
          <label className="w-full p-3 border border-gray-300 rounded-lg">
            <p>Total number of stops: 200</p>
          </label>
          <label className="w-full p-3 border border-gray-300 rounded-lg">
            <p>Number of cars: 300</p>
          </label>
          <label className="w-full p-3 border border-gray-300 rounded-lg">
            <p>Other data: 100</p>
          </label>
        </div>

        {/* Biểu đồ đường */}
        <div className="w-full bg-white p-4 rounded-lg shadow-lg mb-6" >
          <Line data={lineData} options={options} />
        </div>

        {/* Biểu đồ cột */}
        <div className="w-full bg-white p-4 rounded-lg shadow-lg mb-6">
          <Bar data={barData} options={options} />
        </div>

        {/* Bảng thông tin vi phạm */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Violation Details</h3>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">STT</th>
                <th className="border border-gray-300 p-2">Vehicle Type</th>
                <th className="border border-gray-300 p-2">Violation</th>
              </tr>
            </thead>
            <tbody>
              {violationData.map((violation, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{violation.vehicleType}</td>
                  <td className="border border-gray-300 p-2">{violation.violation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6">This is where the dashboard content will go.</p>
      </div>
    </div>
  );
};

export default Dashboard;
