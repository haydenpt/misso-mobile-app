const domain = process.env.REACT_APP_DOMAIN_GETINVOLVED;

export const getAllCommitteeInfo = async () => {
  const res = await fetch(`${domain}/getallcommitteeinfo`);
  return res.json();
};

export const getAllSocialMedia = async () => {
  const res = await fetch(`${domain}/getallsocialmedia`);
  return res.json();
};
