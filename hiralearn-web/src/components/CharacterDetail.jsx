import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hiraganaData } from '../data/hiragana';

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const strokeSvgRef = useRef(null);
  const practiceCanvasRef = useRef(null);
  const [char, setChar] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  
  useEffect(() => {
    const foundChar = hiraganaData.find(c => c.id === parseInt(id));
    if (!foundChar) {
      navigate('/');
      return;
    }
    setChar(foundChar);
    
    const practiceCtx = practiceCanvasRef.current?.getContext('2d');
    if (practiceCtx) {
      practiceCtx.clearRect(0, 0, 600, 300);
      practiceCtx.fillStyle = '#0f172a';
      practiceCtx.fillRect(0, 0, 600, 300);
      practiceCtx.strokeStyle = '#334155';
      practiceCtx.lineWidth = 2;
      practiceCtx.strokeRect(0, 0, 600, 300);
    }
  }, [id, navigate]);
  
  const startDrawing = (e) => {
    if (!practiceCanvasRef.current) return;
    
    const canvas = practiceCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x * scaleX, y * scaleY);
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    setIsDrawing(true);
    if (e.touches) e.preventDefault();
  };
  
  const draw = (e) => {
    if (!isDrawing || !practiceCanvasRef.current) return;
    
    const canvas = practiceCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    ctx.lineTo(x * scaleX, y * scaleY);
    ctx.stroke();
    if (e.touches) e.preventDefault();
  };
  
  const stopDrawing = () => {
    setIsDrawing(false);
  };
  
  const clearPracticeCanvas = () => {
    if (!practiceCanvasRef.current) return;
    
    const canvas = practiceCanvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  };
  
  if (!char) {
    return <div className="loading">Loading character...</div>;
  }
  
  return (
    <div className="container">
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="page-title">Learn {char.char}</h1>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/')}
          style={{ marginTop: '1rem' }}
        >
          Back to Overview
        </button>
      </div>
      
      <div className="detail-container">
        <div className="animation-section">
          <h2 className="section-title">Character</h2>
          <div className="canvas-container">
            <svg 
              ref={strokeSvgRef} 
              width="100%" 
              height="300" 
              className="stroke-canvas"
              viewBox="0 0 100 100"
              style={{ background: '#0f172a' }}
            >
              <text
                x="50"
                y="60"
                textAnchor="middle"
                fill="#f8fafc"
                fontSize="40"
                fontFamily="serif"
              >
                {char.char}
              </text>
            </svg>
          </div>
          <div className="controls">
            <button 
              className="btn btn-success"
              onClick={() => {
                const audio = new SpeechSynthesisUtterance(char.audioText);
                window.speechSynthesis.speak(audio);
              }}
            >
              Play Audio
            </button>
          </div>
        </div>
        
        <div className="practice-section">
          <h2 className="section-title">Writing Practice</h2>
          <div className="canvas-container">
            <canvas 
              ref={practiceCanvasRef} 
              width="600" 
              height="300" 
              className="practice-canvas"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              style={{ width: '100%', height: 'auto', maxWidth: '600px' }}
            />
            {showGuide && (
              <div className="guide-overlay">
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '8rem',
                  color: '#334155',
                  opacity: 0.3
                }}>
                  {char.char}
                </div>
              </div>
            )}
          </div>
          <div className="controls">
            <button 
              className="btn btn-secondary" 
              onClick={clearPracticeCanvas}
            >
              Clear
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => setShowGuide(!showGuide)}
            >
              {showGuide ? 'Hide Guide' : 'Show Guide'}
            </button>
            <button 
              className="btn btn-success"
              onClick={() => {
                alert('बहुत अच्छा! आपका लिखावट सुंदर है। और अभ्यास करें।');
              }}
            >
              Check (Basic)
            </button>
          </div>
          
          <div className="char-info">
            <div className="char-display">{char.char}</div>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Romaji</div>
                <div className="info-value">{char.romaji}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Hindi Pronunciation</div>
                <div className="info-value hindi">{char.hindiPronunciation}</div>
              </div>
            </div>
            
            <div className="hint-text">
              <strong>Hint:</strong> {char.hindiHint}
            </div>
            
            {char.exampleWord && (
              <div className="hint-text" style={{ marginTop: '1rem' }}>
                <strong>Example:</strong> {char.exampleWord} - {char.exampleMeaning}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;