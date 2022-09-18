const domain = process.env.REACT_APP_DOMAIN_ADMIN_MEMBERS;

// GET ALL MEMBER DATA
export const getAllMembersAdmin = async () => {
  const res = await fetch(`${domain}/getallmembersadmin`);
  return res.json();
};

// GET MEMBER BY PSID
export const getMemberByPsid = async (psid) => {
  const res = await fetch(`${domain}/getmemberbypsid/${psid}`);
  return res.json();
};

// GET ALL MEMBER FOR MANUAL CHECKIN
export const getAllMembersForCheckin = async (eventId) => {
  const res = await fetch(`${domain}/getallmembersforcheckin/${eventId}`);
  return res.json();
};

// UPDATE GROUPME TOGGLE
export const updateInGroupme = async (psid) => {
  const res = await fetch(`${domain}/updateingroupme/${psid}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

// UPDATE SHIRT PICKUP TOGGLE
export const updateGotShirt = async (psid) => {
  const res = await fetch(`${domain}/updategotshirt/${psid}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

// GET ALL COMMITTEE MEMBERS
export const getAllCommitteeMembers = async () => {
  const res = await fetch(`${domain}/getallcommitteemembers`);
  return res.json();
};

// GET ALL COMMITTEE MEMBERS
export const removeCommitteeMember = async (itemToDelete) => {
  const res = await fetch(`${domain}/removecommitteemember`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToDelete),
  });
  return res.json();
};

// GET ACTIVITY LOG OF ALL MEMBERS
export const getActivityLog = async () => {
  const res = await fetch(`${domain}/getactivitylog`);
  return res.json();
};

// DELETE ACTIVITY LOG WHEN ADD POINTS INCORRECTLY
export const removeActivityLog = async (itemToDelete) => {
  const res = await fetch(`${domain}/removeactivitylog`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemToDelete),
  });
  return res.json();
};

// DOWNLOAD MIXER RESUMES
export const getAllMixerResume = async () => {
  const res = await fetch(`${domain}/getallmixerresume`);
  return res.blob();
};