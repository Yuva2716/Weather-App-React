import { useRef, useState } from "react";
import React from 'react';

export const Sample = () => {
    const input = useRef();
    const [weather, setWeather] = useState(null);

    const report = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.current.value}&appid=fbb50edff6f4bb9ba498298f8b781c0e`)
            .then(result => result.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    };

    return (
        <>
            <div className='h-100 w-75'>
                <h1>Weather App</h1>
                <div className="container w-100 ml-100">
                    <input ref={input} className='p-2' type="text" placeholder='Enter City Name' />
                    <input onClick={report} className='p-2 m-2 rounded btn btn-primary' type="button" value="Know Your Weather" />
                    {
                        weather ?
                            <div className="result">
                                <ul>
                                    <li>Weather Condition: {weather.weather[0].description}</li>
                                    <li>Temperature: {weather.main.temp}</li>
                                </ul>
                            </div>
                            : ""
                    }
                </div>
            </div>
        </>
    );
};
