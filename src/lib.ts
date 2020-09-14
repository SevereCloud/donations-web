export const moneyFormat = (x: number): string => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

interface DateFormat {
  day: number;
  month: number;
  year: number;
}

export const todayDate = (): DateFormat => {
  const today = new Date();
  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };
};

const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

export const dateFormat = (date: DateFormat): string => {
  // DatePicker may return incorrect values
  if (date.month == 0 || date.day == 0 || date.year == 0) {
    return ''
  } else {
    return `${date.day} ${months[date.month - 1]} ${date.year}`;
  }
};
