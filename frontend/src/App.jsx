import { Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import VisitorCapture from "./pages/VisitorCapture";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/visitor" element={<VisitorCapture />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
