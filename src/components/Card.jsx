import cardBackground from '../assets/card.jpg';

export default function Card({
  cat,
  handleClick,
}) {
  const background = cat === null
    ? {}
    : { backgroundImage: `url("${cat.url}")` };

  let className = 'card';
  if (cat === null) {
    className += ' loading';
  }

  return (
    <button
      type="button"
      className={className}
      style={background}
      onClick={handleClick}
    >
      {}
    </button>
  );
}

// backgroundImage: `url(${cardBackground})`,
// backgroundImage: `url("https://cataas.com/cat/${cat.id}")`np
