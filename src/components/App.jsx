import { useEffect, useState } from 'react';
import CardsContainer from './CardsContainer';
import Score from './Score';
import '../styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  return (
    <>
      <div className="header">
        <div className="max-width">
          <h1>Meowmory</h1>
          <Score label="SCORE" score={score} />
          <Score label="BEST" score={bestScore} />
          <button type="button" className="home-button" alt="Home" />
        </div>
      </div>
      <CardsContainer setScore={setScore} />
    </>
  );
}

export default App;
