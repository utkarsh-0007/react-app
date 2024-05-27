import { useState, useEffect } from 'react';
import './App.css';












function App() {
  const [city, setCity] = useState("Delhi");
  const [detail, setDetail] = useState({
    "coord": {
      "lon": 2.3488,
      "lat": 48.8534
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 18.91,
      "feels_like": 18.5,
      "temp_min": 17.28,
      "temp_max": 21.71,
      "pressure": 1019,
      "humidity": 63
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.6,
      "deg": 90
    },
    "clouds": {
      "all": 20
    },
    "dt": 1716633604,
    "sys": {
      "type": 2,
      "id": 2012208,
      "country": "FR",
      "sunrise": 1716609437,
      "sunset": 1716665892
    },
    "timezone": 7200,
    "id": 2988507,
    "name": "Paris",
    "cod": 200
  })
function handleChange(e){
  
  debounce(e.target.value);
}
let d;
function debounce(e){
  clearTimeout(d);
  d=setTimeout(()=>{
      setCity(e)

  },1000)
}

  let id='22e1ed97a88ca6b3b629cd5fbd8edde7';
  async function get(x){
    if(x){
    let                response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${id}&units=metric`);
    let                data =     await response.json();
    setDetail(data);
    console.log(data);}}
  // auto load on start
    useEffect(()=>{
           get(city)
  },[city])
  return (
    <>
      <div className="main">
        <div className="searchbox">
          <input type="text" className='search' onChange={handleChange} />
        </div>
       {detail.main ? <div className="display">
          <div className="displayleft">
          <div>{detail.main.temp}<sup> °C</sup> <br /> {city}</div> 
          
          </div>
          <div className="displayright">
            <div className="feelslike">Feels Like :{detail.main.feels_like} <sup>°C</sup>
            <br />
            Min Temp : {detail.main.temp_min} <sup>°C</sup>  <br />
            Max Temp : {detail.main.temp_max} <sup>°C</sup>
            </div>
          </div>
        </div> : <div className='other'>
          <div className="message"> CITY NOT FOUND</div>
          </div>}
      </div>
    </>
  )
}
export default App;