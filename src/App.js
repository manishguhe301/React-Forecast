import React, { useState } from "react";
import "./App.css";
import WeatherData from "./Components/WeatherData";
import axios from "axios";

function App() {
  const [Data, setData] = useState();
  const [Location, setLocation] = useState("");
  const handleSearch = async () => {
    if (Location === "") {
      alert("Please enter a city");
    } else {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=6c13c7ef7d3dec2aafe2845a895fee14&units=metric`
        )
        .then((Response) => {
          setData(Response.data);
        });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={Location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="Enter City Name"
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
      {Data ? <WeatherData data={Data} /> : ""}
    </div>
  );
}

export default App;
