import type { Achievement } from './types';

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
    return '';
  } else {
    return `${date.day} ${months[date.month - 1]} ${date.year}`;
  }
};

const achievementTypes: Record<Achievement['type'], string> = {
  repost: 'За репост',
  amount: '',
};

export const achievementDescription = (achievement: Achievement): string => {
  if (achievement.type === 'amount') {
    return `от ${moneyFormat(achievement.min)} ₽`;
  }

  return achievementTypes[achievement.type];
};

export const achievementSort = (a: Achievement, b: Achievement): -1 | 0 | 1 => {
  if (a.type === 'amount' && b.type === 'amount') {
    return a.min === b.min ? 0 : a.min > b.min ? 1 : -1;
  }
  if (a.type === 'repost' && b.type === 'amount') {
    return -1;
  }
  if (a.type === 'amount' && b.type === 'repost') {
    return 1;
  }

  return 0;
};
