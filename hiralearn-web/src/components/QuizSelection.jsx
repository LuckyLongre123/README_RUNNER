import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hiraganaData } from '../data/hiragana';

const QuizSelection = () => {
  const navigate = useNavigate();
  const [selectedChars, setSelectedChars] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(['multipleChoice']);
  
  const quizTypes = [
    { value: 'multipleChoice', label: 'Multiple Choice' },
    { value: 'matchFollowing', label: 'Match the Following' },
    { value: 'writing', label: 'Writing Practice' },
    { value: 'audioQuiz', label: 'Audio Quiz' },
    { value: 'romajiToHiragana', label: 'Romaji to Hiragana' },
    { value: 'hiraganaToRomaji', label: 'Hiragana to Romaji' },
    { value: 'audioToRomaji', label: 'Audio to Romaji' },
    { value: 'audioToHindi', label: 'Audio to Hindi' }
  ];
  
  const handleTypeChange = (typeValue) => {
    if (selectedTypes.includes(typeValue)) {
      setSelectedTypes(selectedTypes.filter(t => t !== typeValue));
    } else {
      setSelectedTypes([...selectedTypes, typeValue]);
    }
  };
  
  const handleCheckboxChange = (charId) => {
    if (selectedChars.includes(charId)) {
      setSelectedChars(selectedChars.filter(id => id !== charId));
    } else {
      setSelectedChars([...selectedChars, charId]);
    }
  };
  
  const startQuiz = () => {
    if (selectedChars.length === 0) {
      alert('Please select at least one character');
      return;
    }
    if (selectedTypes.length === 0) {
      alert('Please select at least one quiz type');
      return;
    }
    navigate('/quiz/start', { state: { selectedChars, selectedTypes } });
  };
  
  return (
    <div className="container">
      <div className="quiz-selection">
        <h1 className="selection-title">Quiz Selection</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', textAlign: 'center' }}>
          Select characters to include in the quiz, or choose "All Characters"
        </p>
        
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Quiz Types (Select Multiple):</h3>
          <div className="quiz-types-grid">
            {quizTypes.map(type => (
              <label key={type.value} style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.value)}
                  onChange={() => handleTypeChange(type.value)}
                  style={{ marginRight: '0.5rem' }}
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
        
        <div className="char-checkboxes">
          <div 
            className="checkbox-item" 
            onClick={handleSelectAll}
            style={{ background: selectAll ? '#3b82f6' : '#334155' }}
          >
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="checkbox-label">
              <div className="checkbox-char">すべて</div>
              <div className="checkbox-info">
                <div className="checkbox-romaji">All Characters</div>
              </div>
            </div>
          </div>
          
          {hiraganaData.map(char => (
            <div 
              key={char.id}
              className="checkbox-item"
              onClick={() => handleCheckboxChange(char.id)}
              style={{ 
                background: selectedChars.includes(char.id) ? '#3b82f6' : '#334155',
                opacity: selectedChars.includes(char.id) ? 1 : 0.8
              }}
            >
              <input
                type="checkbox"
                checked={selectedChars.includes(char.id)}
                onChange={() => handleCheckboxChange(char.id)}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="checkbox-label">
                <div className="checkbox-char">{char.char}</div>
                <div className="checkbox-info">
                  <div className="checkbox-romaji">{char.romaji}</div>
                  <div className="hindi" style={{ fontSize: '0.75rem' }}>{char.hindiPronunciation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="quiz-controls">
          <button 
            className="btn btn-primary" 
            onClick={startQuiz}
            style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
          >
            Start Quiz ({selectedChars.length} selected)
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/')}
            style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSelection;