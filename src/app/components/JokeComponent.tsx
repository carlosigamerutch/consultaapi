// components/JokeComponent.tsx
import React, { useState, useEffect } from 'react';

const JokeComponent: React.FC = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    try {
      const jokeRes = await fetch('https://v2.jokeapi.dev/joke/Any');
      const jokeData = await jokeRes.json();
      setJoke(jokeData.joke || `${jokeData.setup} - ${jokeData.delivery}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Chiste del día</h2>
      <p>{joke}</p>
    </div>
  );
};

export default JokeComponent;