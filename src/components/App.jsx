import '../styles/App.css';
import Card from './Card';
import homeSVG from '../assets/home.svg';

const tempCats = [
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
  {
    id: 'hsyTGG9ihjVVAbsC',
  },
];

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
      <div className="cards-container">
        {tempCats.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
    </>
  );
}

export default App;
