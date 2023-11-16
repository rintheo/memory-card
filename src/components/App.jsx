import '../styles/App.css';
import CardsContainer from './CardsContainer';

function App() {
  return (
    <>
      <div className="header">
        <div className="max-width">
          <h1>Meowmory</h1>
          <div className="score">
            <h2>SCORE</h2>
            <p>0</p>
          </div>
          <div className="score">
            <h2>BEST</h2>
            <p>0</p>
          </div>
          <button type="button" className="home-button" alt="Home" />
        </div>
      </div>
      <CardsContainer />
    </>
  );
}

export default App;
