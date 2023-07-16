const Api_Key='5adeaab6e6f0a36f683cce05a86b3774';

const makeIconURL=(icon)=>`https://openweathermap.org/img/wn/${icon}@2x.png`
 

const getFormattedWeatherData=async(city,units="metric")=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;

    const data=await fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);
   

    

     const{weather,main:{temp,feels_like,temp_min,temp_max,pressure,humidity},
    wind:{speed},
sys:{country},
name}=data; 

const {description,icon}=weather[0]
return{
    description,
    weather_icon:makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name
}

} 

export {getFormattedWeatherData};


// const weatherAPI=async()=>{
//     const url='https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=5adeaab6e6f0a36f683cce05a86b3774'
//     const data=await fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>data)
//     console.log("hello")
// }