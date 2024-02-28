import './App.css';
// import { BrouserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import HomePage from './Components/Homepage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<Navigate to=" /" />} />
      </Routes>
    </Router>
  );
}

export default App;
