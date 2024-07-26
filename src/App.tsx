import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Dashboard from './components/adminDashboard/Dashboard';
import UserDashboard from './components/userDashboard/UserDashboard';
// import LandingPage from './components/userDashboard/LandingPage';




const App: React.FC = () => {

  return (
    <Router>
      <div className="d-flex align-items-center min-vh-100">
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/" element={
            <div className="container d-flex bg-white shadow rounded">
              <SignUp />
              <SignIn />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
