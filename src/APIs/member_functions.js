import { process } from "../../environment";
const domain = process.env.REACT_APP_DOMAIN_MEMBERS;

// INSERT NEW MEMBER TO MEMBER DB
export const insertMemberToDatabase = async (profile) => {
  const res = await fetch(`${domain}/insertmembertodatabase`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  return res.json();
};

// GET PROFILE BY EMAIL FROM MEMBER DB
export const getProfileByEmail = async (email) => {
  const res = await fetch(`${domain}/getprofilebyemail/${email}`);
  return res.json();
};

// GET POINTS OF A MEMBER
export const getPointsByMember = async (psid) => {
  const res = await fetch(`${domain}/getpointsbymember/${psid}`);
  return res.json();
};

// GET MEMBER BOARD
export const getMemberBoard = async () => {
  const res = await fetch(`${domain}/getmemberboard`);
  return res.json();
};

// INSERT TO EVENT ATTENDANCE
export const insertMemberToEventAttendance = async (psid, eventId) => {
  const res = await fetch(`${domain}/insertmembertoeventattendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
    }),
  });
  return res.json();
};

// DELETE FROM EVENT ATTENDANCE
export const deleteMemberFromEventAttendance = async (psid, eventId) => {
  const res = await fetch(`${domain}/deletememberfromeventattendance`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
    }),
  });
  return res.json();
};

// GET ACTIVITY LOG OF A MEMBER
export const getActivityLogByMember = async (psid) => {
  const res = await fetch(`${domain}/getactivitylogbymember/${psid}`);
  return res.json();
};

// INSERT TO ACTIVITY LOG
export const insertToActivityLog = async (
  psid,
  eventId,
  activityCode,
  description,
  email
) => {
  const res = await fetch(`${domain}/inserttoactivitylog`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
      activityCode: activityCode,
      description: description,
      email: email,
    }),
  });
  return res.json();
};

// DELETE FROM ACTIVITY LOG
export const deleteFromActivityLog = async (psid, eventId) => {
  const res = await fetch(`${domain}/deletefromactivitylog`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
    }),
  });
  return res.json();
};

// INSERT MEMBER TO EVENT SIGN UP
export const insertToEventSignUp = async (psid, eventId) => {
  const res = await fetch(`${domain}/inserttoeventsignup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
    }),
  });
  return res.json();
};

// DELETE FROM EVENT SIGN UP
export const deleteFromEventSignUp = async (psid, eventId) => {
  const res = await fetch(`${domain}/deletefromeventsignup`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      eventId: eventId,
    }),
  });
  return res.json();
};

// CHECK IF MEMBER HAS SIGNED UP TO AN EVENT
export const getRsvpByMemberEvent = async (psid, eventId) => {
  const res = await fetch(`${domain}/getrsvpbymemberevent/${psid}/${eventId}`);
  return res.json();
};

// INSERT MEMBER TO MEMBER COMMITTEE
export const insertToMemberCommittee = async (psid, committeeId) => {
  const res = await fetch(`${domain}/inserttomembercommittee`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      committeeId: committeeId,
    }),
  });
  return res.json();
};

// DELETE FROM MEMBER COMMITTEE
export const deleteFromMemberCommittee = async (psid, committeeId) => {
  const res = await fetch(`${domain}/deletefrommembercommittee`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      psid: psid,
      committeeId: committeeId,
    }),
  });
  return res.json();
};

// CHECK IF MEMBER HAS SIGNED UP TO AN EVENT
export const checkIfMemberInCommittee = async (psid, committeeId) => {
  const res = await fetch(
    `${domain}/checkifmemberincommittee/${psid}/${committeeId}`
  );
  return res.json();
};

// GET ALL COMMITTESS OF A MEMBER
export const getAllCommitteesByMember = async (psid) => {
  const res = await fetch(`${domain}/getallcommitteesbymember/${psid}`);
  return res.json();
};

// UPDATE MEMBER SOCIAL MEDIA
export const updateMemberSocialMedia = async (profile) => {
  const res = await fetch(`${domain}/updatemembersocialmedia`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profile),
  });
  return res.json();
};

// UPLOAD RESUME FOR CAREER MIXER
export const uploadMixerResume = async (resumeFile) => {
  const res = await fetch(`${domain}/uploadmixerresume`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    body: resumeFile,
  });
  return res;
};

// GET RESUME INFO BY PSID
export const getResumeByPSID = async (psid) => {
  const res = await fetch(`${domain}/getresumebypsid/${psid}`);
  return res.json();
};

// GET RESUME FILE BY PSID
export const getResumeFileByPSID = async (psid) => {
  const res = await fetch(`${domain}/getresumebypsid/${psid}/getresumefile`);
  return res.blob();
};

// DELETE RESUME BY PSID
export const deleteResumeByPSID = async (psid) => {
  const res = await fetch(`${domain}/deleteresumebypsid/${psid}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};
