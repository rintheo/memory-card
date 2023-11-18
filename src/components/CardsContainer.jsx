import { useState, useEffect } from 'react';
import shuffle from './helpers/shuffle';
import Card from './Card';

const apiKey = 'live_DrzAArmmLfLJRDOXlEwmHUxHNA3qkF4Ih9jyzZihhyNptWI7tUl0uWYhZp7X5aMs';

export default function CardsContainer({
  score,
  setScore,
}) {
  const [cats, setCats] = useState(null);
  const [selectedCats, setSelectedCats] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&api_key=${apiKey}`)
      .then((data) => data.json());
    await setCats(response);
  };

  const handleClick = (e, id) => {
    shuffle(cats);
    if (!selectedCats.includes(id)) {
      setSelectedCats([
        ...selectedCats,
        id,
      ]);
      setScore((s) => s + 1);
    } else {
      setScore(0);
      setCats(null);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setCats(null);
    };
  }, []);

  return (
    <div className="cards-container">
      {
        cats === null
          ? (Array(12).fill(true).map((item, index) => (
            <Card key={index} cat={null} />
          )))
          : (cats.map((cat) => (
            <Card
              key={cat.id + score}
              cat={cat}
              handleClick={(e) => { handleClick(e, cat.id); }}
            />
          )))
      }
    </div>
  );
}
