export const SITE = {
  name: "Liviah Lash Tech",
  fullName: "Liviah Lash Tech Esthetics Spa",
  tagline: "Where Every Client Is Queen",
  city: "Nairobi, Kenya",
  address: "Raha Plaza, 3rd Floor, Kimathi Street, Nairobi CBD",
  mapQuery: "Kimathi Street, Nairobi, Kenya",
  phoneMobile: "0769 899 548",
  phoneMobileRaw: "+254769899548",
  phoneLine: "0141 560 955",
  phoneLineRaw: "+254141560955",
  whatsapp: "254769899548",
  email: "hello@liviahlashtech.co.ke",
  instagram: "https://instagram.com/liviahlashtech",
  facebook: "https://facebook.com/liviahlashtech",
  pinterest: "https://pinterest.com/liviahlashtech",
  url: "https://liviahlashtech.co.ke",
  established: "2021",
} as const;

/** 0 = Sunday … 6 = Saturday. Minutes from midnight. */
export const BUSINESS_HOURS: {
  day: string;
  short: string;
  dow: number;
  open: number | null;
  close: number | null;
}[] = [
  { day: "Monday", short: "Mon", dow: 1, open: null, close: null },
  { day: "Tuesday", short: "Tue", dow: 2, open: 9 * 60, close: 19 * 60 },
  { day: "Wednesday", short: "Wed", dow: 3, open: 9 * 60, close: 19 * 60 },
  { day: "Thursday", short: "Thu", dow: 4, open: 9 * 60, close: 19 * 60 },
  { day: "Friday", short: "Fri", dow: 5, open: 9 * 60, close: 19 * 60 },
  { day: "Saturday", short: "Sat", dow: 6, open: 9 * 60, close: 17 * 60 },
  { day: "Sunday", short: "Sun", dow: 0, open: 11 * 60, close: 16 * 60 },
];

export function hoursForDay(dow: number) {
  return BUSINESS_HOURS.find((h) => h.dow === dow) ?? BUSINESS_HOURS[0];
}
