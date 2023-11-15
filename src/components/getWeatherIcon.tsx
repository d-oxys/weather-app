export default function getWeatherIcon(temp: number, isNight: boolean) {
  let icon;
  if (temp < 10) {
    icon = isNight ? '03n' : '03d';
  } else if (temp <= 25) {
    icon = isNight ? '02n' : '02d';
  } else {
    icon = isNight ? '01n' : '01d';
  }
  return icon;
}
