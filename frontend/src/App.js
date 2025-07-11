// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RegisterVisitor from './components/RegisterVisitor';
// import CheckInOut from './components/CheckInOut';
// import Dashboard from './components/Dashboard';
// import Feedback from './components/Feedback';
// import Navbar from './components/Navbar';

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/register" element={<RegisterVisitor />} />
//                 <Route path="/check" element={<CheckInOut />} />
//                 <Route path="/feedback" element={<Feedback />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
/*import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
*/

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import VisitorCapture from './components/Visitor/VisitorCapture';
import AdminLogin from './components/Admin/AdminLogin';
import VisitorRegister from './components/Visitor/VisitorRegister';
import AdminDashboard from './components/Admin/AdminDashboard';
import VisitorFeedback from './components/Visitor/VisitorFeedback';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />                 {/* First page */}
          <Route path="/visitor" element={<VisitorCapture />} />
          <Route path="/visitor/register" element={<VisitorRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/visitor/feedback" element={<VisitorFeedback />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
