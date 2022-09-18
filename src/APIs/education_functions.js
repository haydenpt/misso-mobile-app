const domain = process.env.REACT_APP_DOMAIN_EDUCATION;
const youtubeDomain = process.env.REACT_APP_DOMAIN_YOUTUBE
const channelId = process.env.REACT_APP_DOMAIN_CHANNEL_ID

export const getAllCodingTime = async () => {
  const res = await fetch(`${domain}/getallcodingtime`);
  return res.json();
};

// YOUTUBE DOMAIN STARTS HERE
export const getChannelInfo = async () => {
  const res = await fetch(`${youtubeDomain}/channel/${channelId}`);
  return res.json();
};

export const getPlaylists = async () => {
  const res = await fetch(`${youtubeDomain}/playlist/${channelId}`);
  return res.json();
};

export const getVideoInPlaylist = async (playlistId) => {
  const res = await fetch(`${youtubeDomain}/videos/${playlistId}`);
  return res.json();
};

// YOUTUBE DOMAIN ENDS