import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import CharacterDetail from './components/CharacterDetail';
import QuizSelection from './components/QuizSelection';
import QuizRunner from './components/QuizRunner';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/quiz" element={<QuizSelection />} />
          <Route path="/quiz/start" element={<QuizRunner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
