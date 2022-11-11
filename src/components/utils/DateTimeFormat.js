import { format, formatDistanceToNow } from "date-fns";

/*
  M: month, d: day, yyyy: year, E: weekday
  h: 12hour, H: 24hour, m: minute, s: second
  a aa: AM, aaa: am, aaaa: a.m 
*/
// ----------------------------------------------------------------------

export const today = new Date();

export function fDate(date) {
  return format(new Date(date), "MM/dd/yyyy");
}

export function fDateOnly(date) {
  return format(new Date(date), "dd");
}

export function fMonthOnly(date) {
  return format(new Date(date), "MM");
}

export function fYearOnly(date) {
  return format(new Date(date), "yyyy");
}

export function fDateFull(date) {
  return format(new Date(date), "EEEE, MM/dd/yyyy");
}

export function fTime(date) {
  return format(new Date(date), "hh:mm:ss aaa");
}

export function fTimeShort(date) {
  return format(new Date(date), "hh:mm aaa");
}

export function fTimeHour(date) {
  return format(new Date(date), "H");
}

export function fWeekDate(date) {
  return format(new Date(date), "EEE");
}

export function fDateTime(date) {
  return format(new Date(date), "MM/dd/yyyy HH:mm ");
}

export function fDateTimeLocal(date) {
  return format(new Date(date), "yyyy-MM-dd'T'HH:mm");
}

export function fDateHtml(date) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}
