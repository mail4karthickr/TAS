import React from 'react';
import './App.css';
import LoginPage from './features/login/LoginPage';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoardPage from 'features/dashBoard/pages/DashBoardPage';

function App() {
  const theme = useSelector(state => state.theme.currentTheme);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashBoardPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
