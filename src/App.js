import Bg from './assets/pexels-aj-povey-226400.jpg'

import './App.css';
import Description from './component/Description';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './WeatherData';

function App() {
const[city,setCity]=useState("chennai");
const[weather,setWeather]=useState(null);



  useEffect(()=>{
    const fetchWeatherData=async()=>{
      const data =await getFormattedWeatherData(city);
      setWeather(data);

    };
    fetchWeatherData();
  },[city]);

  const enterCity=(e)=>{
if(e.keyCode===13){
  setCity(e.currentTarget.value)
   e.currentTarget.blur();
}
  }

  return (
    <div className="App" style={{backgroundImage:`url(${Bg})`}}>
      {
        weather && (
<div className="container">
        <div className="section section__input">
          <input onKeyDown={enterCity} type="text" name='city' placeholder='Enter city ...' />
        </div>

        <div className="section section__temperature">
          <div className="icon">
            <h3>{weather.name},{weather.country}</h3>
            <img src={weather.weather_icon} alt="wetherimg" />
            <h3>{weather.description}</h3>
          </div>
          <div className="temperature">
            <h1>{weather.temp.toString().slice(0,2)} &deg;C</h1>
          </div>
        </div>
        {/* buttom design */}
        <Description weather={weather} />
      </div>
        )
      }
      
    </div>
  );
}

export default App;
