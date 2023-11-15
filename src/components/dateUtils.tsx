// dateUtils.ts
export function formatDate(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const suffixes = ['th', 'st', 'nd', 'rd'];

  const day = days[date.getDay()];
  const dateNumber = date.getDate();
  let suffix = suffixes[(dateNumber - 20) % 10] || suffixes[dateNumber] || suffixes[0];
  const month = date.toLocaleString('default', { month: 'long' });

  return `${day} ${dateNumber}${suffix} ${month}`;
}
