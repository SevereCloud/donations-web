export const moneyFormat = x => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
export const todayDate = () => {
  const today = new Date();
  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  };
};
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
export const dateFormat = date => {
  // DatePicker may return incorrect values
  if (date.month == 0 || date.day == 0 || date.year == 0) {
    return '';
  } else {
    return `${date.day} ${months[date.month - 1]} ${date.year}`;
  }
};
const achievementTypes = {
  repost: 'За репост',
  amount: ''
};
export const achievementDescription = achievement => {
  if (achievement.type === 'amount') {
    return `от ${moneyFormat(achievement.min)} ₽`;
  }

  return achievementTypes[achievement.type];
};
export const achievementSort = (a, b) => {
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