'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleFetchPokemon = async (pokemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    setPokemonData(data);
  };

  const handleSearch = () => {
    if (searchTerm) {
      handleFetchPokemon(searchTerm.toLowerCase());
    }
  };

  useEffect(() => {
    handleFetchPokemon('pikachu'); // Fetch default Pokémon on load
  }, []);

  return (
    <div>
      <h1>Información del Pokémon</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar Pokémon"
      />
      <button onClick={handleSearch}>Buscar</button>
      {pokemonData && (
        <div>
          <h1>{pokemonData.name}</h1>
          <p>Altura: {pokemonData.height}</p>
          <p>Peso: {pokemonData.weight}</p>
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            width={96}
            height={96}
          />
        </div>
      )}
      <button onClick={() => window.location.href = '/'}>Regresar a la Página Principal</button>
    </div>
  );
}