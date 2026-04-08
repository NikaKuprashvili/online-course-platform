import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages (we will create these next)
import Dashboard from "./pages/Dashboard/Dashboard";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
