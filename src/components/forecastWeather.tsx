/* eslint-disable @next/next/no-img-element */
import React from 'react';

type ForecastData = {
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

type ForecastWeatherProps = {
  forecastData: ForecastData;
};

export default function ForecastWeather({ forecastData }: ForecastWeatherProps) {
  return (
    <div>
      <div className='next-5-days'>
        <h2 className='next-5-days__heading'>Data cuaca 5 hari kedepan</h2>
        <div className='next-5-days__container'>
          {forecastData.map((data, index) => {
            const date = new Date(data.dt_txt);
            const day = date.toLocaleString('en-US', { weekday: 'short' });
            const dayOfMonth = date.getDate();
            const month = date.getMonth() + 1;
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            return (
              <div className='next-5-days__row' key={index}>
                <div className='next-5-days__date'>
                  {day}
                  <div className='next-5-days__label'>
                    {dayOfMonth}/{month}
                  </div>
                </div>

                <div className='next-5-days__low'>
                  {data.main.temp_min}&deg;
                  <div className='next-5-days__label'>Low</div>
                </div>

                <div className='next-5-days__high'>
                  {data.main.temp_max}&deg;
                  <div className='next-5-days__label'>High</div>
                </div>

                <div className='next-5-days__icon'>
                  <img src={iconUrl} alt={data.weather[0].main} />
                </div>

                <div className='next-5-days__rain'>
                  0%
                  <div className='next-5-days__label'>Rain</div>
                </div>

                <div className='next-5-days__wind'>
                  {Math.round(data.wind.speed)}mph
                  <div className='next-5-days__label'>Wind</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
