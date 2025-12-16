import React from "react";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import { Route, Routes } from "react-router-dom";

// Components are now managed within DashboardLayout

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </div>
  );
}

export default App;
