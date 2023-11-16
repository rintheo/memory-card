import cardBackground from '../assets/card.jpg';

export default function Card({ cat }) {
  const background = cat === null
    ? {}
    : { backgroundImage: `url("${cat.url}")` };

  let className = 'card';
  if (cat === null) {
    className += ' loading';
  }

  return (
    <div
      className={className}
      style={background}
    />
  );
}

// backgroundImage: `url(${cardBackground})`,
// backgroundImage: `url("https://cataas.com/cat/${cat.id}")`np
