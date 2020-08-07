import React, {useState, useEffect} from "react";
import './App.css';
import cloudySun from './icons/cloudy-sun.svg';
import cloudy from './icons/cloudy.svg';
import rainy from './icons/rainy.svg';
import snowy from './icons/snowy.svg';
// import storm from './icons/storm.svg';
import sun from './icons/sun.svg';
import thunder from './icons/thunder.svg';
import windy from './icons/windy.svg';


function Weather(props) {
    const key = '824069befdf023f7d42a89999ddd953b';
    const [temperature, setTemperature] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [windDegrees, setWindDegrees] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Lyon&APPID=' + key + '&units=metric')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setTemperature(Math.round(data.main.temp));
            setWindSpeed(Math.round(data.wind.speed));
            setWindDegrees(data.wind.deg);
            setDescription(data.weather[0].description);
        })
    },[])

    function weatherType(type) {
        switch(type) {
            case 'clear sky':
                return sun;
            case 'few clouds':
                return cloudySun;
            case 'scattered clouds':
                return cloudy;
            case 'broken clouds':
                return cloudy;
            case 'shower rain':
                return rainy;
            case 'rain':
                return rainy;
            case 'thunderstorm':
                return thunder;
            case 'snow':
                return snowy;
            case 'mist':
                return windy;
            default:
                return sun;
        }
    }

    useEffect(() => {    
        setIcon(weatherType(description));
    });

    return (
        <div className="card-content white-text">
            <span className="card-title">
                {props.city}
            </span>
            <p>
                <img src={icon} alt="icon" />
            </p>
            <span className="temperature">
                {temperature + '°'}
            </span>
            <div className="wind">
                {'Vent ' + windSpeed + 'km/h (' + windDegrees + '°)'}
            </div>
{/* 
            <img src={cloudySun} alt="icon" />
            <img src={cloudy} alt="icon" />
            <img src={rainy} alt="icon" />
            <img src={snowy} alt="icon" />
            <img src={storm} alt="icon" />
            <img src={sun} alt="icon" />
            <img src={thunder} alt="icon" />
            <img src={windy} alt="icon" /> */}

        </div>
    )
}

export default Weather;