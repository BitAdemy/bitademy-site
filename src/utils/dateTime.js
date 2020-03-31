import moment from 'moment-strftime';

export const dateTime = {
  getForRobots: dateTime => moment(dateTime).strftime('%Y-%m-%d %H:%M'),
  getForHumans: dateTime => moment(dateTime).strftime('%d - %m - %y'),
  wasPast: dateTime => moment(dateTime) <= new Date().getTime(),
  willBeFuture: dateTime => moment(dateTime) > new Date().getTime()
};
