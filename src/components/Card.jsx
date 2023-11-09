import cardBackground from '../assets/card.jpg';

export default function Card({ cat }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url("https://cataas.com/cat/${cat.id}")`,
      }}
    />
  );
}

// backgroundImage: `url(${cardBackground})`,
// backgroundImage: `url("https://cataas.com/cat/${cat.id}")`,
