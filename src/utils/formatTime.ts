import * as dayjs from 'dayjs';
export const formatDate = (): string => {
  const date = new Date();
  return dayjs(date).format('HH:mm');
};
export const formatTime = (): string => {
  const date = new Date();

  return dayjs(date).format('YYYY/MM/DD HH:mm:ss');
};
