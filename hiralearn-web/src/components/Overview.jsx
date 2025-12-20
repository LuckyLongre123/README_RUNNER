import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hiraganaData } from '../data/hiragana';

const Overview = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
  const filteredData = hiraganaData.filter(char =>
    char.romaji.toLowerCase().includes(search.toLowerCase()) ||
    char.hindiPronunciation.includes(search)
  );
  
  const handleCardClick = (charId) => {
    navigate(`/character/${charId}`);
  };
  
  return (
    <div className="container">
      <h1 className="page-title">HiraLearn – Hiragana Overview</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search by pronunciation (e.g., 'ka')..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            fontSize: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #334155',
            backgroundColor: '#1e293b',
            color: '#f8fafc',
            maxWidth: '400px',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
      
      <div className="grid">
        {filteredData.map((char) => (
          <div
            key={char.id}
            className="card"
            onClick={() => handleCardClick(char.id)}
          >
            <div className="card-char">{char.char}</div>
            <div className="card-info">
              <div className="pronunciation">{char.romaji}</div>
              <div className="hindi">{char.hindiPronunciation}</div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredData.length === 0 && (
        <div style={{ textAlign: 'center', color: '#94a3b8', padding: '3rem' }}>
          No characters found matching "{search}"
        </div>
      )}
    </div>
  );
};

export default Overview;