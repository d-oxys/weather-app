'use clien';
import { useEffect, useState } from 'react';

const API_KEY = '96ffde5832d448ec5af3cea0621dc0d8';
const CITY_NAME = 'Bandung';

type WeatherData = {
  city: {
    name: string;
    country: string;
  };
  list: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
};

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data: WeatherData) => {
        data.list.forEach((item) => {
          item.main.temp = Math.round(item.main.temp);
          item.main.temp_min = Math.round(item.main.temp_min);
          item.main.temp_max = Math.round(item.main.temp_max);
        });

        setWeatherData(data);
      });
  }, []);

  return weatherData;
}
