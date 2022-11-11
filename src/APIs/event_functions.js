import { process } from "../../environment.js";
const domain = process.env.REACT_APP_DOMAIN_EVENTS;

export const getAllEventsOrderByTime = async () => {
  const res = await fetch(`${domain}/getalleventsorderbytime`);
  return res.json();
};
