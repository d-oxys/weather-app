/* eslint-disable @next/next/no-img-element */
import React from 'react';

type WeatherProps = {
  temperature: number;
  condition: string;
  icon: string;
  high: number;
  low: number;
  wind: number;
};

const Weather: React.FC<WeatherProps> = ({ temperature, condition, icon, high, low, wind }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <div className='mt-1 flex w-full sm:w-[50%]'>
        <div className='w-full flex-grow text-center'>
          <img src={iconUrl} alt={condition} className='w-[10.5em]' />
        </div>
        <div className='w-full flex-grow text-center'>
          <div className='text-[5.25em] font-light'>{temperature}°</div>
        </div>
      </div>
      <div className='flex w-full justify-around border-b border-t border-opacity-50 pb-4 sm:mb-4 sm:w-[50%] sm:border-b-0 sm:border-l sm:border-t-0 sm:pb-0'>
        <div>
          <div className='mt-4 text-2xl'>{high}°</div>
          <div className='text-white text-opacity-60'>High</div>
          <div className='mt-4 text-2xl'>{low}°</div>
          <div className='text-white text-opacity-60'>Low</div>
        </div>
        <div>
          <div className='mt-4 text-2xl'>{wind}mph</div>
          <div className='text-white text-opacity-60'>Wind</div>
          <div className='mt-4 text-2xl'>Possible</div>
          <div className='text-white text-opacity-60'>{condition}</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
