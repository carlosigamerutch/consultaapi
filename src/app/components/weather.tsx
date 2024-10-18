// WeatherCard.tsx
'use client';
import React from 'react';
import styles from '../weather/styles/WeatherPage.module.css';

interface WeatherCardProps {
    weather: {
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
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
    return (
        <div className={styles.weatherCard}>
            <h2>{weather.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;