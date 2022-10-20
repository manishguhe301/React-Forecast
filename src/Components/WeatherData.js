import React from "react";

const WeatherData = ({ data }) => {
  let date = new Date();
  let text = date.toDateString().slice(0, 10);

  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>
            {text} | {data?.name}, {data?.sys?.country}
          </p>
        </div>
        <div className="temp">
          <h1>{data?.main?.temp}°C</h1>
          <p>
            Min {data?.main?.temp_min}°C | Max {data?.main?.temp_max}°C |{" "}
            {data?.weather[0].main}
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>Feels Like</p>
          <p className="bold">{data?.main?.feels_like}°C</p>
        </div>
        <div className="humidity">
          <p>Humidity</p>
          <p className="bold">{data?.main?.humidity}%</p>
        </div>
        <div className="wind">
          <p>Wind</p>
          <p className="bold">{data?.wind?.speed} m/s</p>
        </div>
        <div className="wind">
          <p>Visibility</p>
          <p className="bold">{data?.visibility} m</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
