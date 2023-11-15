/* eslint-disable @next/next/no-img-element */
import React from 'react';
import getWeatherIcon from './getWeatherIcon';

type HourlyData = {
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  dt_txt: string;
}[];

type HourlyWeatherProps = {
  hourlyData: HourlyData;
};

export default function HourlyWeather({ hourlyData }: HourlyWeatherProps) {
  return (
    <div className='hidden w-full sm:block'>
      <h2 className='text-lg font-normal text-white text-opacity-80'>Cuaca Hari Ini</h2>
      <div className='sm:flex sm:justify-between'>
        {hourlyData.map((data, index) => {
          const hour = new Date(data.dt_txt).getHours();
          const isNight = hour < 6 || hour >= 18;
          const icon = getWeatherIcon(data.main.temp, isNight);
          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

          return (
            <div className='bg-opacity-15 w-[13%] rounded bg-[#00000026] p-2 text-center text-lg lg:w-28' key={index}>
              <div className='mb-2'>
                {hour % 12 || 12}
                {hour < 12 ? 'am' : 'pm'}
              </div>
              <img src={iconUrl} alt='Weather icon' />
              <div>{data.main.temp}°</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
