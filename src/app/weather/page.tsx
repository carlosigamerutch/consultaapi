// WeatherPage.tsx
'use client';
import React, { useState, useEffect } from 'react';
import WeatherCard from '../components/weather';
import styles from '../weather/styles/WeatherPage.module.css';


type WeatherData = {
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    name: string;
};

export default function WeatherPage() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string>('Chihuahua');
    const [searchCity, setSearchCity] = useState<string>('');

    const fetchWeather = async (city: string) => {
        const apiKey = '12aeed8c6aa5fca5d1c4b9bca6d39356'; // Reemplaza con tu clave de API de OpenWeatherMap
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherRes.json();
        setWeather(weatherData);
    };
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchCity.trim() !== '') {
            fetchWeather(searchCity);
        } else {
            console.error('La ciudad de búsqueda no puede estar vacía.');
        }
    };
    
    return (
        <div className={styles.weatherPage}>
            {weather && <WeatherCard weather={weather} />}
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="Buscar ciudad"
                    className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>Buscar</button>
                    
                </form>
                <button onClick={() => window.location.href = '/'} className={styles.goBackButton}>Regresar a la Página Principal</button>
            </div>
        );
    }