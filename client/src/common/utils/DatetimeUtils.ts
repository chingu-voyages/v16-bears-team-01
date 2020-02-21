type WeekDay = 0|1|2|3|4|5|6;
type HH = 10|11|12|13|14|15|16|17|18|19|20|21|22;

export function getHHMM(date: Date): string {
  const [hh,mm,ss] = date.toTimeString().split(' ')[0].split(':');
  return `${hh}:${mm}`
}

export function getDayDdMonth(date: Date): string {
  const [day, month, d, yyyy] = date.toDateString().split(' ').slice(0,4);
  return `${day} ${d}.${month}`
}

//TODO test!
export function timeAgo(date: Date): string {
  const now = new Date();
  const dt: number = now.valueOf() - date.valueOf();
  if (dt < 1000*60) { return 'just now'}
  if (dt < 1000*60*60) { return 'minutes ago'}
  else if (dt < 1000*60*60*24) { return `${(dt/(1000*60*60)).toFixed(1)} hours ago`}
  else if (dt < 1000*60*60*24*7) { return `${(dt/(1000*60*60*24)).toFixed(1)} days ago`}
  else { return `${(dt/(1000*60*60*24*365)).toFixed(1)} years ago`}
}
