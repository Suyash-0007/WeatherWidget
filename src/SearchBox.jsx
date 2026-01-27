import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css"
import {useState} from 'react'

function SearchBox() {

    const [city,setCity]= useState("");

    const API_KEY="3aceb11d3fcc7104ded28af5bf9a6687";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";


    let getWeatherInfo = async( city)=> {
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            
            city:city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity
        }

        console.log(result);
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo(city);
    }
  return (
    <div className='search'>
      <h3> This is the search box</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
        <Button variant="contained" type="submit" >
          Send
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
