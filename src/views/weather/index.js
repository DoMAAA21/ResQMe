import React, { useState } from "react";
import { Grid, Table, Button,Card,CardContent,Typography } from "@mui/material";

const WeatherMonitoringSystem = () => {
  const [weather, setWeather] = useState([
    {
      location: "Manila",
      temperature: 25,
      humidity: 75,
      windSpeed: 10,
      weatherCondition: "Sunny",
    },
    {
      location: "Cebu City",
      temperature: 27,
      humidity: 80,
      windSpeed: 12,
      weatherCondition: "Partly cloudy",
    },
    {
      location: "Davao City",
      temperature: 29,
      humidity: 85,
      windSpeed: 15,
      weatherCondition: "Rainy",
    },
    {
        location: "Taguig City",
        temperature: 29,
        humidity: 85,
        windSpeed: 15,
        weatherCondition: "Rainy",
      },
  ]);

  const handleRefreshWeather = () => {
    const newWeather = [
      {
        location: "Manila",
        temperature: 26,
        humidity: 76,
        windSpeed: 11,
        weatherCondition: "Mostly sunny",
      },
      {
        location: "Cebu City",
        temperature: 28,
        humidity: 81,
        windSpeed: 13,
        weatherCondition: "Mostly cloudy",
      },
      {
        location: "Davao City",
        temperature: 30,
        humidity: 86,
        windSpeed: 16,
        weatherCondition: "Thunderstorm",
      },
      {
        location: "Taguig City",
        temperature: 27,
        humidity: 80,
        windSpeed: 12,
        weatherCondition: "Partly cloudy",
      },
    ];
    setWeather(newWeather);
  };

  return (
  <>
  <Card>
    <CardContent style={{ textAlign: 'center',backgroundColor: '#FF312E' }}>
<Typography variant="h4" >
 Weather Today
</Typography>
</CardContent>
</Card>

    <Card><CardContent>
    <Grid container spacing={1}>
      <Table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
            <th>Weather Condition</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {weather.map((weatherData) => (
            <tr key={weatherData.location}>
              <td>{weatherData.location}</td>
              <td>{weatherData.temperature}</td>
              <td>{weatherData.humidity}</td>
              <td>{weatherData.windSpeed}</td>
              <td>{weatherData.weatherCondition}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleRefreshWeather}
      >
        Refresh Weather
      </Button>
      
    </Grid>
    </CardContent>
    </Card>
    </>
  );
};

export default WeatherMonitoringSystem;
