import React from 'react'
import './Description.css'
import {FaArrowDown,FaArrowUp,FaWind} from "react-icons/fa";
import{BiHappy}from'react-icons/bi';
import{MdCompress,MdOutlineWaterDrop}from'react-icons/md';


const Description = ({weather,units}) => {

  // // const tempUnit = units === 'metric'?"c" :"f";
  //  const windUnit = units === 'metric'?"m/s":"m/h"

const cardsData=[
  {
    id:1,
    icon:<FaArrowDown/>,
    title:"min",
    data:weather.temp_min.toString().slice(0,2),
    unit:"°c",
  },
  {
    id:2,
    icon:<FaArrowUp/>,
    title:"max",
    data:weather.temp_max.toString().slice(0,2),
    unit:"°c",
  },
  {
    id:3,
    icon:<BiHappy/>,
    title:"feels like",
    data:weather.feels_like.toFixed().slice(0.,2),
    unit:"°c",
  },
  {
    id:4,
    icon:<MdCompress/>,
    title:"pressure",
    data:weather.pressure,
    unit:"hPa",
  },
  {
    id:5,
    icon:<MdOutlineWaterDrop/>,
    title:"humidity",
    data:weather.humidity,
    unit:"%",
  },
  {
    id:6,
    icon:<FaWind/>,
    title:"Wind speed",
    data:weather.speed.toFixed(),
    unit:"m/h",
  },
];






  return (
    <div className="section section__description">
      {/* {cardsData.map(({id,icon,title,data,units})=>{
           <div className="card">
           <div className="description__card-icon">
             <FaArrowDown/>
            <small>min</small>
           </div>
           <h2>32&deg;c</h2>
       </div>
      
  })
        
} */}

{
  cardsData.map(({id,icon,title,data,unit})=>(

    
    <div key={id} className="card">
    <div className="description__card-icon">
     {icon}
     <small>{title}</small>
    </div>
    <h2>{`${data} ${unit}`}</h2>
   </div> 
 
  ))

}

</div>
  )
}

export default Description