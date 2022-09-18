import { process } from "../../environment";
const domain = process.env.REACT_APP_DOMAIN_WP;

export const getEmailWordpress = async (email) => {
  const res = await fetch(`${domain}/getemailwordpress/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export const getMemberInfoWordpress = async (email) => {
  const res = await fetch(`${domain}/getmemberinfowordpress/${email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return res.json();
};
