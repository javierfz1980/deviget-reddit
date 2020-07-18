import moment from 'moment';

export function ago(unixTime: number, format: string = 'YYYYMMDD') {
  return moment(moment.unix(unixTime), format).fromNow();
}
