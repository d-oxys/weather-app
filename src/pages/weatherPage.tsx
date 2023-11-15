/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '../components/container';
import { formatDate } from '../components/dateUtils';
import Weather from '../components/weatherComponent';
import useWeatherData from '../components/weatherData';
import HourlyWeather from '../components/hourlyWeather';
import ForecastWeather from '../components/forecastWeather';

const currentDate = formatDate(new Date());

export default function Home() {
  const weatherData = useWeatherData();

  if (!weatherData || !weatherData.list) return <div>Loading...</div>;

  const currentWeather = weatherData.list[0];
  const temperature = currentWeather.main.temp;
  const high = currentWeather.main.temp_max;
  const low = currentWeather.main.temp_min;
  const wind = currentWeather.wind.speed;
  const condition = currentWeather.weather[0].main;
  const icon = currentWeather.weather[0].icon;

  const forecastData = weatherData.list.slice();
  const today = new Date().toISOString().split('T')[0];
  const hourlyData = forecastData.filter((data) => data.dt_txt.split(' ')[0] === today);
  const dailyData = forecastData.reduce((acc: typeof forecastData, data) => {
    const date = data.dt_txt.split(' ')[0];
    if (!acc.length || acc[acc.length - 1].dt_txt.split(' ')[0] !== date) {
      acc.push(data);
    }
    return acc;
  }, [] as typeof forecastData);

  return (
    <>
      <main className='main-container'>
        <div className='w-full'>
          <h1 className='m-0 text-3xl font-semibold'>
            {weatherData.city.name}, {weatherData.city.country}
          </h1>
          <div>{currentDate}</div>
        </div>
        <Weather temperature={temperature} condition={condition} icon={icon} high={high} low={low} wind={wind} />
        <HourlyWeather hourlyData={hourlyData} />
        <div>
          <ForecastWeather forecastData={dailyData} />
        </div>
      </main>
    </>
  );
}
