const domain = process.env.REACT_APP_DOMAIN_ADMIN_GETINVOLVED;

export const updateCommittee = async (itemToUpdate) => {
  const res = await fetch(`${domain}/updatecommittee`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToUpdate),
  });
  return res.json();
};

export const updateSocialMedia = async (itemToUpdate) => {
  const res = await fetch(`${domain}/updatesocialmedia`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToUpdate),
  });
  return res.json();
};

export const getCommitteeDutyTypes = async () => {
  const res = await fetch(`${domain}/getcommitteedutytypes`);
  return res.json();
};
