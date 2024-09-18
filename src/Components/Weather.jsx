import { useRef, useState } from "react";
import React from 'react';
import './Weather.css';


export const Weather = () => {
    const input = useRef();
    const [weather, setWeather] = useState(null);
    

    const report = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.current.value}&appid=fbb50edff6f4bb9ba498298f8b781c0e&units=metric`)
            .then(result => result.json())
            .then(data => setWeather(data))
            .catch(error => console.error('Error fetching the weather data:', error));
    };

    return (
        <>
            <div className='W-APP h-100 w-75'>
                <h1 className="heading text-dark">Weather Report</h1>
                <div className="container w-100 mt-3 ">
                    <input ref={input} className='inp-city p-2' type="text" placeholder='Enter City Name' required />                    
                    <br />
                    <input onClick={report} className='p-2 mt-4 rounded btn btn-primary' type="button" value="Get Weather" />
                    {
                        weather ?
                            <div className="result mt-3">
                                <h5> <span>Region&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.name}, {weather.sys.country}</h5>
                                <h5> <span>Weather &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.weather[0].description}</h5>
                                <h5> <span>Temp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.main.temp} °C</h5>
                                <h5> <span>Min-Temp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> {weather.main.temp_min} °C</h5>
                                <h5> <span>Max-Temp &nbsp;&nbsp;&nbsp;:</span> {weather.main.temp_max} °C</h5>
                                <h5> <span>Wind Speed &nbsp;:</span> {weather.wind.speed} </h5>
                                

                            </div>
                            : ""
                    }
                </div>
            </div>
        </>
    );
};
