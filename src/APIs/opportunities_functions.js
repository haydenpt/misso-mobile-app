const domain = process.env.REACT_APP_DOMAIN_OPPORTUNITIES;

export const getOpportunities = async () => {
  const res = await fetch(`${domain}/getopportunities`);
  return res.json();
};
