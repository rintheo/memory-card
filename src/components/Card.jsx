import { useState, useEffect } from 'react';
import cardBackground from '../assets/card.jpg';

export default function Card({
  cat,
  handleClick,
}) {
  const [entry, setEntry] = useState(true);
  const background = cat === null
    ? {}
    : { backgroundImage: `url("${cat.url}")` };

  let className = 'card';
  if (cat === null) {
    className += ' loading';
  } else if (entry) {
    className += ' entry';
  }

  return (
    <button
      type="button"
      className={className}
      style={background}
      onClick={() => { if (!entry) { handleClick(); } }}
      onAnimationEnd={() => { setEntry(false); }}
    >
      {}
    </button>
  );
}

// backgroundImage: `url(${cardBackground})`,
// backgroundImage: `url("https://cataas.com/cat/${cat.id}")`np
