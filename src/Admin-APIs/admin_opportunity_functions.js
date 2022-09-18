const domain = process.env.REACT_APP_DOMAIN_ADMIN_OPPORTUNITIES;

export const getAdminOpportunities = async () => {
  const res = await fetch(`${domain}/getopportunities`);
  return res.json();
};

export const updateOpportunity = async (itemToUpdate) => {
  const res = await fetch(`${domain}/updateopportunity`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToUpdate),
  });
  return res.json();
};

export const deleteOpportunity = async (opp) => {
  const res = await fetch(`${domain}/deleteopportunity`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opp),
  });
  return res.json();
};

export const insertOpportunity = async (newOpp) => {
  const res = await fetch(`${domain}/insertopportunity`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOpp),
  });
  return res.json();
};