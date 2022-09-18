const domain = process.env.REACT_APP_DOMAIN_DEVELOPMENT;

export const getAllDevelopment = async () => {
  const res = await fetch(`${domain}/getalldevelopment`);
  return res.json();
};

export const uploadResume = async (resumeFile) => {
  const res = await fetch(`${domain}/resume/upload/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    body: resumeFile
  });
  return res;
};
