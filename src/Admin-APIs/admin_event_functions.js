const domain = process.env.REACT_APP_DOMAIN_ADMIN_EVENTS;

export const getAllAdminEvents = async () => {
  const res = await fetch(`${domain}/getalladminevents`);
  return res.json();
};

export const getActivityTypes = async () => {
  const res = await fetch(`${domain}/getactivitytypes`);
  return res.json();
};

export const getEventById = async (event) => {
  const res = await fetch(`${domain}/geteventbyid/${event}`);
  return res.json();
};

export const insertEvent = async (newEvent) => {
  const res = await fetch(`${domain}/insertevent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEvent),
  });
  return res.json();
};

export const updateEvent = async (eventToUpdate, event_id, has_signup) => {
  const res = await fetch(`${domain}/updateevent`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_id: event_id,
      ...eventToUpdate,
      has_signup: has_signup,
    }),
  });
  return res.json();
};

export const deleteEvent = async (eventToDelete) => {
  const res = await fetch(`${domain}/deleteevent`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventToDelete),
  });
  return res.json();
};

export const getRSVPList = async (eventId) => {
  const res = await fetch(`${domain}/getrsvplist/${eventId}`);
  return res.json();
};

export const getEventAttendanceList = async (eventId) => {
  const res = await fetch(`${domain}/geteventattendancelist/${eventId}`);
  return res.json();
};
