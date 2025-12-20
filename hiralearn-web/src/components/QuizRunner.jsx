import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRandomQuestions } from '../data/hiragana';
import confetti from 'canvas-confetti';

const QuizRunner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedChars, selectedTypes } = location.state || { selectedChars: 'all', selectedTypes: ['multipleChoice'] };
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  useEffect(() => {
    const quizQuestions = getRandomQuestions(selectedChars, 5, selectedTypes);
    setQuestions(quizQuestions);
  }, [selectedChars, selectedTypes]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = typeof option === 'string' 
      ? option === currentQuestion.correctAnswer
      : option.char === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const handleSubmitWriting = () => {
    if (isAnswered) return;
    
    setIsAnswered(true);
    const isCorrect = userInput.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    
    if (isCorrect) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setUserInput('');
    } else {
      setIsQuizComplete(true);
    }
  };
  
  const playAudio = () => {
    if (!currentQuestion) return;
    
    const audio = new SpeechSynthesisUtterance(currentQuestion.char.audioText);
    window.speechSynthesis.speak(audio);
  };
  
  const restartQuiz = () => {
    const quizQuestions = getRandomQuestions(selectedChars, 5, selectedTypes);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserInput('');
    setScore(0);
    setIsQuizComplete(false);
  };
  
  if (questions.length === 0) {
    return (
      <div className="container">
        <div className="loading">Loading quiz questions...</div>
      </div>
    );
  }
  
  if (isQuizComplete) {
    return (
      <div className="container">
        <div className="completion-screen">
          <h1 className="completion-title">Quiz Complete!</h1>
          <div className="completion-score">
            {score} / {questions.length}
          </div>
          <div style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            {score === questions.length ? 'Perfect score! 🎉' : 
             score >= questions.length / 2 ? 'Good job! 👍' : 
             'Keep practicing! 💪'}
          </div>
          <div className="completion-buttons">
            <button className="btn btn-primary" onClick={restartQuiz}>
              Retry Same Selection
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/quiz')}>
              Back to Quiz Selection
            </button>
            <button className="btn btn-success" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div className="quiz-container">
        <div className="quiz-header">
          <div className="quiz-score">Score: {score}</div>
          <div className="quiz-progress">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
        
        <div className="question-card">
          <div className="question-type">
            {currentQuestion.type === 'hiraganaToHindi' 
              ? 'Hiragana → Hindi Pronunciation' 
              : currentQuestion.type === 'hindiToHiragana'
              ? 'Hindi → Hiragana'
              : currentQuestion.type === 'writing'
              ? 'Writing Practice'
              : currentQuestion.type === 'audioQuiz'
              ? 'Audio Quiz'
              : currentQuestion.type === 'romajiToHiragana'
              ? 'Romaji → Hiragana'
              : currentQuestion.type === 'hiraganaToRomaji'
              ? 'Hiragana → Romaji'
              : currentQuestion.type === 'audioToRomaji'
              ? 'Audio → Romaji'
              : currentQuestion.type === 'audioToHindi'
              ? 'Audio → Hindi'
              : 'Match the Following'}
          </div>
          
          <div className="question-prompt">
            {currentQuestion.type === 'hiraganaToHindi' ? (
              <div style={{ fontSize: '4rem' }}>{currentQuestion.char.char}</div>
            ) : currentQuestion.type === 'hindiToHiragana' ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Which Hiragana character corresponds to:
                </div>
                <div style={{ fontSize: '2rem', color: '#60a5fa' }}>
                  "{currentQuestion.char.hindiPronunciation}"
                </div>
              </div>
            ) : currentQuestion.type === 'writing' ? (
              <div>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentQuestion.char.char}</div>
                <div style={{ fontSize: '1.5rem' }}>Type the Romaji:</div>
              </div>
            ) : currentQuestion.type === 'audioQuiz' ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Listen and choose the correct Hiragana:
                </div>
                <button className="btn btn-success" onClick={playAudio} style={{ fontSize: '1.2rem' }}>
                  🔊 Play Audio
                </button>
              </div>
            ) : currentQuestion.type === 'romajiToHiragana' ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Which Hiragana character corresponds to:
                </div>
                <div style={{ fontSize: '2rem', color: '#60a5fa' }}>
                  "{currentQuestion.char.romaji}"
                </div>
              </div>
            ) : currentQuestion.type === 'hiraganaToRomaji' ? (
              <div style={{ fontSize: '4rem' }}>{currentQuestion.char.char}</div>
            ) : currentQuestion.type === 'audioToRomaji' ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Listen and choose the correct Romaji:
                </div>
                <button className="btn btn-success" onClick={playAudio} style={{ fontSize: '1.2rem' }}>
                  🔊 Play Audio
                </button>
              </div>
            ) : currentQuestion.type === 'audioToHindi' ? (
              <div>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Listen and choose the correct Hindi Pronunciation:
                </div>
                <button className="btn btn-success" onClick={playAudio} style={{ fontSize: '1.2rem' }}>
                  🔊 Play Audio
                </button>
              </div>
            ) : (
              <div>Match the Following</div>
            )}
          </div>
          
          {(currentQuestion.type === 'hiraganaToHindi' || currentQuestion.type === 'audioQuiz' || currentQuestion.type === 'audioToRomaji' || currentQuestion.type === 'audioToHindi') && (
            <div className="audio-button">
              <button className="btn btn-success" onClick={playAudio}>
                🔊 Play Audio
              </button>
            </div>
          )}
          
          {currentQuestion.type === 'writing' ? (
            <div className="writing-input">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type here..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1.2rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #334155',
                  backgroundColor: '#1e293b',
                  color: '#f8fafc',
                  textAlign: 'center'
                }}
                disabled={isAnswered}
              />
              {!isAnswered && (
                <button className="btn btn-primary" onClick={handleSubmitWriting} style={{ marginTop: '1rem' }}>
                  Submit
                </button>
              )}
            </div>
          ) : (
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => {
                const optionValue = typeof option === 'string' ? option : option.char;
                const optionDisplay = typeof option === 'string' ? (
                  currentQuestion.type === 'hiraganaToRomaji' || currentQuestion.type === 'audioToRomaji' ? option :
                  currentQuestion.type === 'audioToHindi' ? option :
                  option
                ) : (
                  currentQuestion.type === 'hindiToHiragana' || currentQuestion.type === 'romajiToHiragana' || currentQuestion.type === 'audioQuiz' ? (
                    <div style={{ fontSize: '2rem' }}>{option.char}</div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem' }}>{option.char}</div>
                      <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                        {option.romaji}
                      </div>
                    </div>
                  )
                );
                
                let className = 'option-btn';
                if (isAnswered) {
                  if (optionValue === currentQuestion.correctAnswer) {
                    className += ' correct';
                  } else if (optionValue === selectedOption) {
                    className += ' incorrect';
                  }
                } else if (selectedOption === optionValue) {
                  className += ' selected';
                }
                
                return (
                  <button
                    key={index}
                    className={className}
                    onClick={() => handleOptionClick(optionValue)}
                  >
                    {optionDisplay}
                  </button>
                );
              })}
            </div>
          )}
          
          {isAnswered && (
            <div className={`feedback ${selectedOption === currentQuestion.correctAnswer || (currentQuestion.type === 'writing' && userInput.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) ? 'correct' : 'incorrect'}`}>
              {selectedOption === currentQuestion.correctAnswer || (currentQuestion.type === 'writing' && userInput.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) ? (
                'सही जवाब! 🎉'
              ) : (
                `गलत, सही उत्तर: ${currentQuestion.correctAnswer}`
              )}
            </div>
          )}
        </div>
        
        <div className="quiz-footer">
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/quiz')}
          >
            Exit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizRunner;