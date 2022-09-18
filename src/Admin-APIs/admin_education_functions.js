const domain = process.env.REACT_APP_DOMAIN_ADMIN_EDUCATION;

export const updateCodingTime = async (itemToUpdate) => {
    const res = await fetch(`${domain}/updatecodingtime`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemToUpdate),
    });
    return res.json();
  };