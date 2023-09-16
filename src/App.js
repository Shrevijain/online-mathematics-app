import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route> 
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
