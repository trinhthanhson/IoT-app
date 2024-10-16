import React from "react";
import Login from "./Login/login"; // Import Login component
import './App.css'; // Vẫn giữ lại CSS hiện có nếu cần
import Dashboard from "./Dashboard/dashboard";
import TrafficLane from "./TrafficLane/trafficelane";
import Config from "./Config/config";
import AppRoutes from "./Router/routes";

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* Hiển thị trang đăng nhập */}
    </div>
  );
}

export default App;
