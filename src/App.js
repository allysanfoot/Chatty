import logo from './logo.svg';
import './index.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthenticationContext } from './context/AuthenticationContext';

function App() {
  const {user} = useContext(AuthenticationContext);

  const ProtectedRoute = ({children}) => {
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
