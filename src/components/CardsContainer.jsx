import { useState, useEffect } from 'react';
import Card from './Card';

const apiKey = 'live_DrzAArmmLfLJRDOXlEwmHUxHNA3qkF4Ih9jyzZihhyNptWI7tUl0uWYhZp7X5aMs';

export default function CardsContainer() {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&api_key=${apiKey}`)
        .then((data) => data.json());
      await setCats(response);
    };
    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {
        cats === null
          ? (Array(12).fill(true).map((item, index) => (
            <Card key={index} cat={null} />
          )))
          : (cats.map((cat, index) => (
            <Card key={index} cat={cat} />
          )))
      }
    </div>
  );
}
