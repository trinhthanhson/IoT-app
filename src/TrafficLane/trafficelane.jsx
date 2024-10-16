import React from 'react';

const TrafficLane = () => {
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
      <div className="w-5/6 bg-gray-100 p-6 flex justify-center items-center">
        {/* Grid Layout for Images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <img src="https://toquoc.mediacdn.vn/280518851207290880/2023/1/16/dsc0295-1673836602400327183301.jpg" alt="Traffic Lane 1" className="w-full h-48 object-cover rounded" />
            <p className="mt-2">60s Clear</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="https://nld.mediacdn.vn/291774122806476800/2022/5/1/img9590-16513998452631565304654.jpg" alt="Traffic Lane 2" className="w-full h-48 object-cover rounded" />
            <p className="mt-2">60s Mid congestion</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="https://toquoc.mediacdn.vn/280518851207290880/2023/1/16/dsc0295-1673836602400327183301.jpg" alt="Traffic Lane 3" className="w-full h-48 object-cover rounded" />
            <p className="mt-2">60s Clear</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="https://nld.mediacdn.vn/291774122806476800/2022/5/1/img9590-16513998452631565304654.jpg" alt="Traffic Lane 4" className="w-full h-48 object-cover rounded" />
            <p className="mt-2">60s Mid congestion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLane;
