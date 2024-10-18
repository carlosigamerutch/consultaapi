'use client'
import { useState, useEffect } from "react";

interface Joke {
  setup?: string;
  delivery?: string;
  joke?: string;
}

export default function JokePage() {
  const [joke, setJoke] = useState<Joke | null>(null);

  const handleFetchJoke = async () => {
    const jokeRes = await fetch('https://v2.jokeapi.dev/joke/Any');
    const jokeData = await jokeRes.json();
    setJoke(jokeData);
  };

  useEffect(() => {
    handleFetchJoke();
  }, []);

  return (
    <div>
      <h1>Chiste del día</h1>
      {joke && (
        <div>
          {joke.setup && <p>{joke.setup}</p>}
          {joke.delivery && <p>{joke.delivery}</p>}
          {joke.joke && <p>{joke.joke}</p>}
        </div>
      )}
      <button className="btn" onClick={handleFetchJoke}>Actualizar Chiste</button>
      <button className="btn" onClick={() => window.location.href = '/'}>Regresar a la Página Principal</button>
      <style jsx>{`
        .btn {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}