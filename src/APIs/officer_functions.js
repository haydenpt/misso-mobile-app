const domain = process.env.REACT_APP_DOMAIN_OFFICER;

export const getOfficerList = async () => {
  const res = await fetch(`${domain}/getofficerlist`);
  return res.json();
};

