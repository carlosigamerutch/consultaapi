// pages/weather.js
import React from 'react';
import WeatherCard from '../components/WeatherCard';

const Weather = ({ weather }) => {
    return (
        <div>
            <h1>Información del Clima</h1>
            <WeatherCard weather={weather} />
        </div>
    );
};

export async function getServerSideProps() {
    const apiKey = '12aeed8c6aa5fca5d1c4b9bca6d39356'; // Reemplaza con tu clave de API de OpenWeatherMap
    const city = 'Chihuahua'; // Puedes cambiar la ciudad según tus necesidades
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const weather = await res.json();

    return {
        props: {
            weather,
        },
    };
}

export default Weather;