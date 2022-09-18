const domain = process.env.REACT_APP_DOMAIN_ADMIN_OFFICER;

export const getOfficerByAlias = async (alias) => {
  const res = await fetch(`${domain}/getofficerbyalias/${alias}`);
  return res.json();
};

export const getOfficerRoster = async () => {
  const res = await fetch(`${domain}/getofficerroster`);
  return res.json();
};

export const updateOfficerProfile = async (itemToUpdate, officerId) => {
  const res = await fetch(`${domain}/updateofficerprofile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ officer_id: officerId, ...itemToUpdate }),
  });
  return res.json();
};
