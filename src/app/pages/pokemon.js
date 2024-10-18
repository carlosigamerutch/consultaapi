// pages/pokemon.js
import React from 'react';
import Card from '../components/card'; // Asegúrate de que la ruta sea correcta

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <Card name={pokemon.name} url={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`} />
        </div>
    );
};

export async function getServerSideProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pokemon = await res.json();

    return {
        props: {
            pokemon,
        },
    };
}

export default Pokemon;